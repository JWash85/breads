const React = require('react')
const Default = require('./layouts/Default')

//Add Bread Index View
function Index ({breads}) {
    return (
      <Default>
        {/*<h2>Index Page</h2> */}
        {/*<p>I have {breads[0].name} bread!</p>*/}
        {/**looping over an array*/}
        <ul>
            {
                breads.map((bread, index) => {
                    return (
                    <li key={index}>
                        <a href={`/breads/${index}`}>
                        {bread.name}
                        </a>
                    </li>)
                })
            }
        </ul>
      </Default>
    )
}

module.exports = Index