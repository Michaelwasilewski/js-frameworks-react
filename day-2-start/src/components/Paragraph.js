function Paragraph(props) {
    const paragraphStyle = {
        color: props.color,
        fontSize : props.fontSize + "px"
    }
    return (
        <div>
            <p style={paragraphStyle}>{props.content}</p>
        </div>
    )
}

export default Paragraph;