const Logo =(props)=>{
    let logo = 'https://cyscomvit.com/assets/images/logo.png'
    let style = {
        width: "100px",
        height: "100px",
        positon:'relative',
        // margin:'2em'
        paddingTop:`${props.value}em`,

    }
    return (
        <>
            <img src={logo} alt="logo" style={style} />
        </>
    )
}

export default Logo