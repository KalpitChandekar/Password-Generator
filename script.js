const upperSet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const lowerSet = 'qwertyuiopasdfghjklzxcvbnm';
const numberSet = '1234567890';
const symbolSet = '!~@#$%^&()*+-/';

const getRandomNumber = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}