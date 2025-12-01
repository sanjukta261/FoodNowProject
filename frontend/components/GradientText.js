
import {Text,StyleSheet} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';

const GradientText = ({text, colors, style}) => {
  return(
    <MaskedView maskElement={<Text style={[style,styles.mask]}>{text}</Text>} >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Text style={[style,styles.transparent]} >{text}</Text>
      </LinearGradient>
    </MaskedView>
  )
};

export default GradientText;

const styles = StyleSheet.create({
  mask: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  transparent: {
    opacity: 0,
  }
})