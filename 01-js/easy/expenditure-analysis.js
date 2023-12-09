/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  return transactions.reduce((acc, curr) => {
    let existingCategory = acc.find((item) => item.category === curr.category);
    if (existingCategory) {
      acc = [
        ...acc.filter((localItem) => localItem.category !== curr.category),
        {
          ...existingCategory,
          totalSpent: curr.price + existingCategory.totalSpent,
        },
      ];
    } else {
      acc.push({
        category: curr.category,
        totalSpent: curr.price,
      });
    }
    return acc;
  }, []);
}

module.exports = calculateTotalSpentByCategory;
