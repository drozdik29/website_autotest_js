Feature('search');

Scenario('test something',  async ({ I }) => {
I.amOnPage('/');
//1
I.fillField('Search','Nike');
I.click('//*[@id="app-wrapper"]/header/div[2]/div/div[2]/div[2]/button/p');
const firstItem = await I.grabTextFrom('//*[@id="6514195cd473f3c5ddf2662f"]/div[2]/h3');
I.click('//*[@id="6514195cd473f3c5ddf2662f"]/div[2]/h3');
if(await I.grabTextFrom('//*[@id="app-wrapper"]/div[1]/main/div/div[2]/div/div/div[1]/div/h2')==='This item is not available'){
    console.log(`${firstItem} is not available, buy something else`)
}else{
    console.log(`You can buy ${firstItem}`)
}
//2
I.fillField('Search','STAR WARS');
I.click('//*[@id="app-wrapper"]/header/div[2]/div/div[2]/div[2]/button/p');

const secondItem = await I.grabTextFrom('//*[@id="637df11d0968140008e5f0c4"]/div[2]/h3');
if(secondItem.includes('STAR WARS')){
    console.log(`${secondItem} includes "STAR WARS"`)
}else{
    console.log(`${secondItem} is not include "STAR WARS"`)
}

const thirdItem = await I.grabTextFrom('//*[@id="64ec81353b552735ce36ebe6"]/div[2]/h3');
if(thirdItem.includes('STAR WARS')){
    console.log(`${thirdItem} includes "STAR WARS"`)
}else{
    console.log(`${thirdItem} is not include "STAR WARS"`)
}

if(I.seeElement('//*[@id="64ec996a3b552735ce36ef1a"]/div[2]/h3')&&I.seeElement('//*[@id="64ec81353b552735ce36ebe6"]/div[2]/h3')){
    console.log('This elements are at the page')
}else{
    throw new Error('This elements are not at the page')
}

//3
I.fillField('Search','Nike');
I.click('//*[@id="app-wrapper"]/header/div[2]/div/div[2]/div[2]/button/p');
const productsFirstPage = await I.grabTextFrom('//*[@id="shop-promotions-container"]/div[3]/div');

I.fillField('Search','STAR WARS');
I.click('//*[@id="app-wrapper"]/header/div[2]/div/div[2]/div[2]/button/p');
const productsSecondPage = await I.grabTextFrom('//*[@id="shop-promotions-container"]/div[2]/div');

if(productsFirstPage!==productsSecondPage){
    console.log('Items do not match')
}else{
    console.log('Items are matching')
};
 });

