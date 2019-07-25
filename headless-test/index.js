import test from 'ava'
import withPage from './withPage'

const url = 'http://localhost:5000'

test('headless test', withPage, async (t, page) => {

	const getCalcTagName = async () => await page.$eval('.calc-template', el => el.tagName)
	const getScreenElementValue = async () => await page.$eval('.calc-template tr:first-child td:first-child', el => el.textContent)
	const tdClick = async (row, col) => await page.$eval(`.calc-template tr:nth-child(${ row }) td:nth-child(${ col })`, el => el.click())


	const add = async () => await tdClick(2, 4)
	const subtrac = async () => await tdClick(3, 4)
	const multiple = async () => await tdClick(4, 4)
	const div = async () => await tdClick(5, 4)
	const equal = async () => await tdClick(5, 3)
	
	await page.goto(url)

	t.is((await page.title()), 'Calc')

	t.is(await getCalcTagName(), 'TABLE')

	await tdClick(2, 3) /* 3 */

	t.is(await getScreenElementValue(), '3')

	await add()

	await tdClick(4, 1) /* 7 */

	t.is(await getScreenElementValue(), '7')

	await equal()

	t.is(await getScreenElementValue(), '10')

	await equal()

	t.is(await getScreenElementValue(), '17')

	await multiple()

	await tdClick(2, 2) /* 2 */

	t.is(await getScreenElementValue(), '2')

	await add()

	t.is(await getScreenElementValue(), '34')

	await tdClick(3, 3) /* 6 */

	t.is(await getScreenElementValue(), '6')

	await equal()

	t.is(await getScreenElementValue(), '40')

	await div()

	await tdClick(3, 1) /* 4 */

	t.is(await getScreenElementValue(), '4')

	await equal()

	t.is(await getScreenElementValue(), '10')

	await subtrac()

	await tdClick(2, 3) /* 3 */

	t.is(await getScreenElementValue(), '3')

	await equal()

	t.is(await getScreenElementValue(), '7')

})