import { Builder, Capabilities, By, Assert} from "selenium-webdriver"
import { elementIsDisabled } from "selenium-webdriver/lib/until"
import { isAssertionExpression } from "typescript"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('I can add an X to the upper left square', async () => {
    let button = await (await driver).findElement(By.id('cell-0'));
    await button.click();
    await driver.sleep(2000)
    
});

test('I can add an X to the upper right square', async () => {
    let button = await (await driver).findElement(By.id('cell-2'));
    await button.click();
    await driver.sleep(2000)
    
});

test('I can add an X to the lower right square', async () => {
    let button = await (await driver).findElement(By.id('cell-8'));
    await button.click();
    await driver.sleep(2000)
    
});

// test('I can see an O in square 1', async () => {
//     let button = driver.findElement(By.css('td')[2]);
//     Assert.strictEqual(await button.getText(), 'O');
// });

// // test('I can see an O in square 3', async () => {
// //     let button = driver.findElement(By.css('td')[4]);
// //     assert.strictEqual(await button.getText(), 'O');
// // });