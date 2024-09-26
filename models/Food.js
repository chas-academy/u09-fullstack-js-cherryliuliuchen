const mongoose = require('mongoose');

// 创建食物模型
const FoodSchema = new mongoose.Schema({
  fdcId: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  foodNutrients: [
    {
      nutrientName: { type: String, required: true },
      value: { type: Number, default: 0 }  // 默认值设置为 0
    }
  ]
});

module.exports = mongoose.model('Food', FoodSchema);
