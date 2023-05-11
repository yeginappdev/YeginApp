import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function WelcImageHolder({ label, text, image, where }) {
  const navigation = useNavigation();
    return (
      <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.button, { backgroundColor: '#FFB968' }]}
        onPress={() => navigation.navigate(where)}>
        <Image source={image} style={styles.imageIcon} />
      </Pressable>
      <Text style={styles.textUnder}>{text}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 159,
    height: 141,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  button: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textUnder: {
    fontSize: 24,
  },
  imageIcon: {
    width: 125,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
