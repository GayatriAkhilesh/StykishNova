import {Text, View} from 'react-native';
import {useDimensionContext} from '../../../context';
import style from './style';
import Accordion from 'react-native-collapsible/Accordion';
import { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Extrainfo = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );

  const [curActiveSections, setActiveSections] = useState([]);

  const DetailsArray = [
    {
      title: 'Manufacturing Details',
      content:
        'Raw Materials: Cotton, silk, polyester, viscose, rayon, wool, and other synthetic or blended fabrics.Stitching & Assembly: High-speed sewing machines stitch the panels together. Some garments may undergo processes like embroidery or printing.Quality Control: Inspected for defects like loose threads, proper stitching, and fitting.',
    },
    {
      title: 'Product Disclaimer',
      content:
        'The products are designed for general consumer use. However, individual results and satisfaction may vary depending on personal preferences, lifestyle, and specific needs.',
    },
    {
      title: 'Features and Details',
      content:
        'Breathable, comfortable fabrics (cotton, silk, linen, and blends).Available in a wide range of sizes (XS to XXL and beyond).Trendy styles, including casual wear, formal outfits, party dresses, and activewear.Eco-friendly options available (organic cotton, recycled polyester).Easy-care options with wrinkle-free or machine-washable designs.',
    },
  ];

  const _renderHeader = (section) =>{
    return(
        <View style={responsiveStyle.detailDrop}>
            <Text style={responsiveStyle.descriptionHead}>{section.title}</Text>
            <FontAwesome name="angle-down" size={25} color="#696969" />

        </View>
    )
  }

  const _renderContent = (section) =>{
    return(
        <View>
            <Text style={responsiveStyle.detailedText}>{section.content}</Text>
        </View>
    )
  }

  const _updateSections = (activeSections) =>{
    setActiveSections(activeSections);
  }

  return (
    <View>
      <Accordion
        activeSections={curActiveSections}
        sections={DetailsArray}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        underlayColor={'transparent'}
        sectionContainerStyle={{paddingVertical:10, borderBottomColor:'#c0c0c0', borderBottomWidth:1,}}
      />
    </View>
  );
};

export default Extrainfo;
