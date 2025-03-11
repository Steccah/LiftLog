import BigNumber from 'bignumber.js';
import { Text } from 'react-native-paper';

interface WeightFormatProps {
  weight: BigNumber | undefined;
  suffixClass?: string;
}
export default function WeightFormat(props: WeightFormatProps) {
  const weightDisplay = props.weight?.decimalPlaces(4).toFormat() ?? '-';
  const suffixClass = props.suffixClass ?? 'text-sm';

  // TODO: get from settings context
  const suffix = 'kg';

  return (
    <Text
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}
    >
      {weightDisplay}
      <Text style={{ fontSize: 12 }}>{suffix}</Text>
    </Text>
  );
}
