const  User  = require('../models/user.js');
const mongoose = require('mongoose');

// Agregat: Pokaż wszystkie dyskusje, w których bierze udział użytkownik, przyjmując tylko userId
const getUserDiscussions = async (userId) => {
  try {
    // Agregacja, która znajdzie dyskusje, w których bierze udział użytkownik
    const discussions = await User.aggregate([
      // Filtrujemy użytkownika po ID
      {
        $match: {
          _id:  mongoose.Types.ObjectId(userId) // Używamy ID użytkownika
        }
      },
      // Rozwijamy tablicę 'discussions' (żeby pracować z poszczególnymi elementami)
      {
        $unwind: '$discussions'
      },
    
    
      // Łączymy dane dyskusji (po ID)
      {
        $lookup: {
          from: 'discussions', // Kolekcja 'discussions'
          localField: 'discussions.discussion_id', // ID dyskusji z tablicy w userze
          foreignField: '_id', // ID dyskusji w kolekcji 'discussions'
          as: 'discussionDetails' // Zwróci szczegóły dyskusji
        }
      },
      
      {
        $unwind: '$discussionDetails'
      },
      
      {
        $project: {
          discussion_title: '$discussionDetails.title',
          discussion_content: '$discussionDetails.content',
          discussion_creator: '$discussionDetails.creator',
          role: '$discussions.role',
        }
      }
    ]);

    return discussions; // Zwracamy wyniki
  } catch (err) {
    throw new Error(err.message); // Jeśli wystąpi błąd, rzucamy wyjątek
  }
};

module.exports = { getUserDiscussions };
