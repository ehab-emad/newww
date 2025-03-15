


function SidebarLink({ text, icon,setCurrentPage ,isActive, setIsOpen }) {


    const styles = {
        link: {
            borderRadius: '12px',
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            gap: '4px',
            justifyContent: 'flex-end',
            padding: '14px 0',
            marginTop: '0px',
            cursor: 'pointer',
            outline: 'none', // Ensure focus outline is visible
            backgroundColor: isActive ? '#30494C' : 'transparent', // Check if active
            color: isActive ? 'white' : 'rgba(166, 177, 178, 1)',
            transition: 'background-color 0.3s ease',
        },
        text: {
            alignSelf: 'stretch',
            margin: ' 0',
        },
        icon: {
            aspectRatio: '1',
            objectFit: 'contain',
            objectPosition: 'center',
            width: '20px',
            alignSelf: 'stretch',
            margin: '0',
            
        },
    };

    const handleClick = () => {
        setCurrentPage(text) 
        setIsOpen && setIsOpen(false)
   
    };

    return (
        <div 
            style={styles.link}
            role="button"
            tabIndex={0}
            onClick={handleClick}
        >
            <span style={styles.text}>{text}</span>
            <img src={icon} alt={`${text} icon`} style={styles.icon} />
        </div>
    );
}

export default SidebarLink;