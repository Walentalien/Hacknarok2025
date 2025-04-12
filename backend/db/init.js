const { MongoClient } = require('mongodb');


const uri = "mongodb://root:example@localhost:27017";
const client = new MongoClient(uri);

async function createDatabaseWithValidator() {
  try {
    
    await client.connect();
    const db = client.db("AppDB");

    const user_validator = {
      $jsonSchema: {
        bsonType: "object",
        required: ["firstname","lastname", "email","birth_date","adress","discussions"],  
        properties: {
          firstname: { 
            bsonType: "string",
            maxLength: 100,
            description: "Name must be a string"
          },
          lastname: {
            bsonType: "string",
            maxLength: 100,
            description: "Lastname must be a string"
          },
          birth_date: {
                bsonType: "date",
                description: "Birth date must be a date"
            },
          email: {
            bsonType: "string",
            pattern: "^.+@.+\..+$", 
            description: "Email must be a string and match the pattern"
          },
          address:{
            bsonType: "object",
            required: [ "county","district","voivodeship"],
            
            properties: {
              county:{
                bsonType: "string",
                description: "County must be a string"
              },
              district: {
                bsonType: "string",
                description: "District must be a string"
              },
              voivodeship: {
                bsonType: "string",
                description: "Voivodeship must be a string"
              },
            }
          
          },
          discussions:
          {
            bsonType: "array",
            items:{
              bsonType: "object",
              required: ["discussion_id","role"],
              properties:{
                discussion_id:{
                  bsonType: "objectId",
                  description: "Discussion ID must be an ObjectId"
                },
                role:{
                  enum: ["creator","participant","observer"],
                  description: "Role must be one of the specified values"
                },
              }
            }
          }
         
        }
      }
    };

    
    const users_collection = await db.createCollection("users", {
      validator: user_validator,
      validationAction: "error"  
    });

    const discussions_validator = {
      $jsonSchema: {
        bsonType: "object",
        required: ["creator","topic","description","participants","posts","active","questions"],
        properties: {
          creator:{
            bsonType: "objectId",
            description: "Creator must be an ObjectId"
          },
          topic: {
            bsonType: "string",
            maxLength: 100,
            description: "Topic must be a string"
          },
          description: {
            bsonType: "string",
            maxLength: 1500,
            description: "Description must be a string"
          },
          participants: {
            bsonType: "array",
            items: {
              bsonType: "objectId",
              description: "Participants must be an array of ObjectIds"
            }
          },
          posts: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["creator","content","date"],
              description: "Posts must be an array of objects",
              properties: {
                creator: {
                  bsonType: "objectId",
                  description: "Creator must be an ObjectId"
                },
                content: {
                  bsonType: "string",
                  maxLength: 1000,
                  description: "Content must be a string"
                },
                date: {
                  bsonType: "date",
                  description: "Date must be a date"
                }
              }

              
            }
          },
          active: {
            bsonType: "bool",
            description: "Active must be a boolean"
          },
          messages: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["creator","content","date"],
              description: "Messages must be an array of objects",
              properties: {
                creator: {
                  bsonType: "objectId",
                  description: "Creator must be an ObjectId"
                },
                content: {
                  bsonType: "string",
                  maxLength: 300,
                  description: "Content must be a string"
                },
                date: {
                  bsonType: "date",
                  description: "Date must be a date"
                }
              }
            }
          }
          ,
          participants:{
            bsonType: "object",
            required:["active","observers"],
            properties:{
              active:{
                bsonType: "array",
                items: {
                  bsonType: "objectId",
                  description: "Active participants must be an array of ObjectIds"
                }
              },
              observers:{
                bsonType: "array",
                items: {
                  bsonType: "objectId",
                  description: "Observers must be an array of ObjectIds"
                }
              }
            }

          }
          
        }
      }
    };

    
    const discussions_collection= await db.createCollection("discussions", {
      validator: discussions_validator,
      validationAction: "error"  
    });



    console.log("Database and collections created with validators successfully.");
  } catch (err) {
    console.error("Error creating database or collection:", err);
  } finally {
   
    await client.close();
  }
}


createDatabaseWithValidator();

// node create_db_with_validator.js
