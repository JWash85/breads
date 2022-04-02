const React = require('react')

//Create an HTML Boilerplate with JSX
function Default(html) {
    return (
        <html>
            <head>
                <title>{html.title || 'Default'}</title>
            </head>
            <body>
                <h1>HTML Rendered!</h1>
                <div className="container">
                    {html.children} {/*'{}'Tells react/jsx to stop, evauate whats inside then render */}
                </div>
            </body>
        </html>
    )
}

//Exports code to be used elsewhere
module.exports = Default