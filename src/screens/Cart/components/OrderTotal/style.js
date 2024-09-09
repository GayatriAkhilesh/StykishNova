import {StyleSheet} from 'react-native';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
      },
      head:{
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: '#000',
        lineHeight: 50,
      },
      content:{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#000',
        lineHeight: 30,
      },
      endContent:{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#000',
        lineHeight: 30,
        marginBottom: 10,
      },
      headEnd:{
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: '#f2f2f2',
        lineHeight: 50,
      },
      total:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#000',
        lineHeight: 50,
      }

  });

export default style;
