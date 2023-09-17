import('https://unpkg.com/react@18/umd/react.development.js')
  .then(() => {
    // The React DOM script has been loaded and executed.
    console.log('React DOM script has been loaded');

    import('https://unpkg.com/react-dom@18/umd/react-dom.development.js')
        .then(() => {
            // The React DOM script has been loaded and executed.
            console.log('React DOM script has been loaded');

            // START - Generated using babel config for browser and manually adding missing ReactDOM and React
            function App() {
                const [counter, setCounter] = React.useState(0);
                const handleClick = () => setCounter(counter + 1);
                return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Counter: ", counter), /*#__PURE__*/React.createElement("button", {
                  onClick: handleClick
                }, "increment"));
              }
            ReactDOM.hydrateRoot(document.getElementById("root"), /*#__PURE__*/React.createElement(App, null));
            // END - Generated using babel config for browser and manually adding missing ReactDOM and React

        })
        .catch((error) => {
            console.error('Error loading React DOM script:', error);
        });

  })
  .catch((error) => {
    console.error('Error loading React DOM script:', error);
  });
