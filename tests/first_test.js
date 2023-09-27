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
console.log('Position of '+await I.grabTextFrom('//*[@id="tabs-1"]/div[5]/div[2]/div/div[6]')+' is '+await I.grabTextFrom('//*[@id="tabs-1"]/div[4]/div/h3')+' and he plays with number '+await I.grabTextFrom('//*[@id="tabs-1"]/div[5]/div[2]/div/div[5]/div[1]'));
console.log('Position of '+await I.grabTextFrom('//*[@id="tabs-1"]/div[7]/div[2]/div/div[6]')+' is '+await I.grabTextFrom('//*[@id="tabs-1"]/div[6]/div/h3')+' and he plays with number '+await I.grabTextFrom('//*[@id="tabs-1"]/div[7]/div[2]/div/div[5]/div[1]'));
console.log('Position of '+await I.grabTextFrom('//*[@id="tabs-1"]/div[9]/div[1]/div/div[6]')+' is '+await I.grabTextFrom('//*[@id="tabs-1"]/div[8]/div/h3')+' and he plays with number '+await I.grabTextFrom('//*[@id="tabs-1"]/div[9]/div[1]/div/div[5]/div[1]'));
I.click('Магазин');
console.log('Price of '+await I.grabTextFrom('//*[@id="slick-slide10"]/div/div[2]/a')+' = '+await I.grabTextFrom('//*[@id="slick-slide10"]/div/div[4]/div[1]'));
I.click('Форма');
I.click('//*[@id="filter-content"]/div/div[13]/div/div[4]/div[2]/a/div');
I.click('2XL');
I.click('//*[@id="add-to-basket"]');
I.click('Кошик')
console.log('Price of '+await I.grabTextFrom('#backet-content > div > div.mini-cart__list > div > div.mini-cart__info > div.mini-cart__info_name > a')+' = '+await I.grabTextFrom( '#backet-content > div > div.mini-cart__total > div.mini-cart__total_price'));
I.click('body > header > div > div > div > div.header__col_two > div.header__row_two.row > div.secondary-menu > ul > li:nth-child(2) > div > button > div > div > div > span.action-elem-with-icon__title');
I.click('body > header > div > div > div > div.header__col_two > div.header__row_two.row > div.main-menu > ul > li:nth-child(7) > div > a');
I.click('body > main > section > div > div.video-navigation.all-video__video-navigation > div > div:nth-child(9) > a');
I.click('body > main > section > div > div.all-video__body > div > div:nth-child(2) > a');
console.log(await I.grabTextFrom('body > main > section > div > div > div.text-page__col_one > div.post__content.typography > div.typography__text.post__content_col_two > p:nth-child(7)'));
I.click('body > header > div > div > div > div.header__col_two > div.header__row_two.row > div.main-menu > ul > li:nth-child(6) > div > a');
I.click('body > header > div > div > div > div.header__col_two > div.header__row_two.row > div.main-menu > ul > li:nth-child(6) > div > div > ul > li:nth-child(1) > a');
console.log('Name of '+await I.grabTextFrom('body > main > section > div > div.management__main > div > div > div.management-box__col_two > h5')+' is '+await I.grabTextFrom('body > main > section > div > div.management__main > div > div > div.management-box__col_two > h1')+' and '+await I.grabTextFrom('body > main > section > div > div.management__main > div > div > div.management-box__col_two > div.management-box__description'))
});
