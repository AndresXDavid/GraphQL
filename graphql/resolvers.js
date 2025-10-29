const Dish = require('../models/Dish');

const toGraph = doc => {
     if (!doc) return null;
     const obj = doc.toObject ? doc.toObject() : doc;
     return {
          id: obj._id.toString(),
          idDish: obj.idDish,
          name: obj.name,
          calories: obj.calories,
          isVegetarian: obj.isVegetarian,
          value: obj.value,
          comments: obj.comments,
          createdAt: obj.createdAt ? obj.createdAt.toISOString() : null,
          updatedAt: obj.updatedAt ? obj.updatedAt.toISOString() : null
     };
};

const resolvers = {
     Query: {
     getAllDishes: async () => {
          const docs = await Dish.find().sort({ createdAt: -1 });
          return docs.map(toGraph);
     },
     getDishById: async (_, { id }) => {
          const doc = await Dish.findById(id);
          return toGraph(doc);
     },
     getDishesByCaloriesRange: async (_, { min, max }) => {
          const docs = await Dish.find({ calories: { $gte: min, $lte: max } }).sort({ calories: 1 });
          return docs.map(toGraph);
     }
     },

     Mutation: {
     createDish: async (_, { input }) => {
          const newDish = new Dish({
               idDish: input.idDish,
               name: input.name,
               calories: input.calories,
               isVegetarian: !!input.isVegetarian,
               value: input.value,
               comments: input.comments || ''
          });
          const saved = await newDish.save();
          return toGraph(saved);
     },

     updateDish: async (_, { id, input }) => {
          const updated = await Dish.findByIdAndUpdate(
          id,
          {
                    idDish: input.idDish,
                    name: input.name,
                    calories: input.calories,
                    isVegetarian: !!input.isVegetarian,
                    value: input.value,
                    comments: input.comments || ''
          },
          { new: true, runValidators: true }
          );
          return toGraph(updated);
     },

     deleteDish: async (_, { id }) => {
          const removed = await Dish.findByIdAndDelete(id);
          return !!removed;
          }
     }
};

module.exports = resolvers;