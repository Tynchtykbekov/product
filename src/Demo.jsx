const Demo = (props) => {
    console.log(props);
    let sortedNums = props.list.sort((a, b) => a -b)
   

    // let register = props.user.map(el => el = '')
    return  (
        <div>
            <h1>Demo page</h1>
            <p>{props.text}</p>
            <p>{sortedNums}</p>
        {/* <h2>{props.user}</h2> */}
        </div>


    )

}
export default Demo;