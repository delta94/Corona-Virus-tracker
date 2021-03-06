import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { DetailedInfoScreen } from '../../component';
import { Store, WorldWideCases } from '../../redux/';

interface Props {
  navigation?: any;
}

const DetailedWorldCases: React.FC<Props> = ({ navigation }) => {
  const worldWideCases: WorldWideCases = useSelector((state: Store) => state.worldWideCases);

  return (
    <View>
      <DetailedInfoScreen
        name='World wide'
        total={worldWideCases.cases}
        totalDeath={worldWideCases.deaths}
        recover={worldWideCases.recovered}
        newCases={worldWideCases.todayCases}
        active={worldWideCases.active}
        tests={worldWideCases.tests}
        critical={worldWideCases.critical}
        navigation={navigation}
      />
    </View>
  );
};

export default DetailedWorldCases;
