import { createStyles } from '@material-ui/core/styles';

const commonStyles = createStyles({
logoImg: {
    width: 24,
    height: 24
},
circularProfilePic: {
    height: 112,
    width: 112,
    borderRadius: 56,
},
flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
},
flexColumn: {
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
    display: 'flex',
    flexDirection: 'row',
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
}
});
export default commonStyles;
