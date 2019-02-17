import { createStyles } from '@material-ui/core/styles';

const styles = createStyles({
    backscreen: {
        flexGrow: 1,
        width: '100%',
        height: '100% !important',
        flexDirection: 'column',
        backgroundImage: 'url(https://www.freegreatpicture.com/files/146/16854-colorful-background-of-high-definition.jpg)',
        backgroundSize: 'cover',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    galleryscreen: {
        flexGrow: 1,
        width: '100% !important',
        height: '100% !important',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    flipper: {
        maxWidth: 400,
        height: 536,
        flex: 1,
        display: 'flex', alignItems:'center',
        justifyContent:'center',
    },
    cardStyle: {
        marginTop: 32,
        maxWidth: 400,
        height: 536,
        marginBottom: 32,
        borderRadius: 16,
        elevation: 16,
        padding: 8,
        flex: 1,
        backgroundColor: 'rgba(256, 256, 256, 0.65)',
        display: 'flex', alignItems:'center',
        justifyContent:'center',
    },
    cardTextInput: {width: 360, marginTop: 16, marginBottom: 16},
    centerContext: {
        height: '100%',
        flexDirection: 'column',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    fixedTop: {
        position: "relative",
        top: 0,
    },
    logoImg: {
        width: 24,
        height: 24
    },
    circularProfilePic: {
        height: 112,
        width: 112,
        borderRadius: 56,
    },
    hasLeftPadded: {
        paddingTop: 32,
        paddingLeft: 32
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    flexColumn: {
        minWidth: window.innerWidth - (window.innerWidth/4),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'left'
    },
    flexColumnLeft: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignContent: 'left',
        alignItems: 'left'
    },
    userName: {
        marginLeft: 16,
    },
    userBio: {
        marginLeft: 16,
    },
    leftAlign: {
        left: 0
    },
    blankDiv: {
        height: 200,
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'hidden',
        flexWrap: 'wrap',
    },
    gallerDiv: {
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'hidden',
        flexWrap: 'wrap',
    },
    hasMargin: {
        margin: 5,
    },
    footer: {
        bottom: 0,
        right: 0,
        left: 0,
        height: 200,
        backgroundColor: '#000000'
    },
    searchBar: {
        margin: 16,
        width: 500,
        height: 56,
        borderRadius: 16,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
    },
    category: {
        flex: 1,
        height: '100%',
        display: 'block',
        textAlign: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        border: '1px solid black',
        alignitem: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    z1Index: {
        position: 'relative',
        display: 'block',
        backgroundColor: 'white',
        zIndex: 100,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        borderBottom: '1px solid black',
    },
    searchInput: {
        flex: 3,
        display: 'flex'
    },
    searchTextInput: {
        bottom: 0,
        width: '100%',
        height: 56,
    },
    type: {
        flex: 1,
        display: 'flex',
        alignitem: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        borderWidth: 4,
        borderColor: 'black',
        border: '1px solid black'
    },
    galleryImage: {
        padding: 2,
        width: '25%',
        height: window.innerWidth/8,
    },
    whiteText: {
        color: 'white',
    },
    fullFlex: {
        display: 'flex',
        flexDirection: 'row-reverse',
        width: '100%',
        marginRight: 32,
    },
    inOnRight: {
        right: 0,
    },
    adjustmargins: {
        width: 32,
    },
    userProfileIcons: {
        height: 48,
        width: 48,
    },
    showLine: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
    },
    blankDivSettings: {
        minWidth: 380,
    },
    customOverlay : {
        background:' rgba(36, 123, 160, 0.7)'
    },
    customModal : {
        background: '#b2dbbf',
        maxWidth: '1000px',
        width: '1000px',
        maxHeight: '600px',
        height: '600px',
        padding: 0,
        
    }
});

export default styles;
