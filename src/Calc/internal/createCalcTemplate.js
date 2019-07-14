export default () => {

    const calcElement = document.createElement('table')

    calcElement.innerHTML = `
    <tr>
        <td colspan="3">0</td>
        <td colspan="1"> C </td>
    </tr>

    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>+</td>
    </tr>
        
    <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>-</td>
    </tr>
        
    <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>X</td>
    </tr>
        
    <tr>
        <td>.</td>
        <td>0</td>
        <td>=</td>
        <td>/</td>
    </tr>
    `

    return calcElement
}