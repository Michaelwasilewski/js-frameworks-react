function Heading({color, fontSize, name, age}) {
    // console.log(props)
    // i want to add a color
    const headingStyle = {
        color: color,
        fontSize: fontSize,
    }
    return (
        <div>
            <h1 style={headingStyle}>Hello I am {name} I am {age}</h1>
        </div>
    )
}

export default Heading;