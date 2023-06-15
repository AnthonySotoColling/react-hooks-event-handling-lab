// Code EyesOnMe Component Here

function EyesOnMe() {
    function output() {
        console.log('Good!')
    }
    function trigger() {
        console.log('Hey! Eyes on me!')
    }
    return <button onFocus={output} onBlur={trigger} >"Eyes on me"</button>
}
export default EyesOnMe