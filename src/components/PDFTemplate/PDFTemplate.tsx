import { formValuesAtom } from '@/store';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import { useAtomValue } from 'jotai';
import { frames } from '@/constants/frames';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    padding: 10,
  },

  pic1: {
    position: 'absolute',
    objectFit: 'cover',
    width: 200,
    height: 400,
  },
  pic2: {
    position: 'absolute',
    objectFit: 'cover',
    left: 200,
    width: 200,
    height: 400,
  },
  pic3: {
    position: 'absolute',
    objectFit: 'cover',
    top: 200,
    width: 200,
    height: 400,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },

  quote: {
    fontStyle: 'italic',
  },

  bg: {
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
});

function PDFTemplate() {
  const formValues = useAtomValue(formValuesAtom);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.name}>{formValues.name}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.quote}>{formValues.quote}</Text>
        </View>

        <View style={styles.section}>
          {formValues.media1! && (
            <Image
              src={URL.createObjectURL(formValues.media1)}
              style={styles.pic1}
            />
          )}
        </View>

        <View style={styles.section}>
          {formValues.media2! && (
            <Image
              src={URL.createObjectURL(formValues.media2)}
              style={styles.pic2}
            />
          )}
        </View>

        <View style={styles.section}>
          {formValues.media3! && (
            <Image
              src={URL.createObjectURL(formValues.media3)}
              style={styles.pic3}
            />
          )}
        </View>
        <Image src={frames[formValues.frameId].src} style={styles.bg} />
      </Page>
    </Document>
  );
}

export default PDFTemplate;
