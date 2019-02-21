import { createStyles } from '@material-ui/core/styles';

const ImageModalStyle = createStyles({
    backscreen: {
        flexGrow: 1,
        width: '100% !important',
        height: '100% !important',
        flexDirection: 'row',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    flexRow: {
    },
    imageSide: {
        flex: 1,
        height: '600px',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 0,
    },
    textSide: {
        flex: 1,
        height: '600px',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
    }
});

export default ImageModalStyle;