Feature('first');

Scenario('test something',  async ({ I }) => {
I.amOnPage('/');
console.log('Title of page in Ukr lang '+await I.grabTitle())
let url = await I.grabCurrentUrl();
console.log(`Current URL is [${url}]`);
I.click('Українська');
I.click('English');
console.log('Title of page in Eng lang '+await I.grabTitle());
I.click('English');
I.click('Українська');
I.click('Команда');
console.log('Position of '+await I.grabTextFrom('//*[@id="tabs-1"]/div[3]/div[1]/div/div[6]')+' is '+await I.grabTextFrom('//*[@id="tabs-1"]/div[2]/div/h3')+' and he plays with number '+await I.grabTextFrom('//*[@id="tabs-1"]/div[3]/div[1]/div/div[5]/div[1]'));
I.scrollTo(0, 550); // Прокрутити сторінку вниз на 500 пікселів (змініть це значення за потребою)
console.log('Position of '+await I.grabTextFrom('//*[@id="tabs-1"]/div[5]/div[2]/div/div[6]')+' is '+await I.grabTextFrom('//*[@id="tabs-1"]/div[4]/div/h3')+' and he plays with number '+await I.grabTextFrom('//*[@id="tabs-1"]/div[5]/div[2]/div/div[5]/div[1]'));
I.scrollTo(0, 550); // Прокрутити сторінку вниз на 500 пікселів (змініть це значення за потребою)
console.log('Position of '+await I.grabTextFrom('//*[@id="tabs-1"]/div[7]/div[2]/div/div[6]')+' is '+await I.grabTextFrom('//*[@id="tabs-1"]/div[6]/div/h3')+' and he plays with number '+await I.grabTextFrom('//*[@id="tabs-1"]/div[7]/div[2]/div/div[5]/div[1]'));
I.scrollTo(0, 550); // Прокрутити сторінку вниз на 500 пікселів (змініть це значення за потребою)
console.log('Position of '+await I.grabTextFrom('//*[@id="tabs-1"]/div[9]/div[1]/div/div[6]')+' is '+await I.grabTextFrom('//*[@id="tabs-1"]/div[8]/div/h3')+' and he plays with number '+await I.grabTextFrom('//*[@id="tabs-1"]/div[9]/div[1]/div/div[5]/div[1]'));
});
