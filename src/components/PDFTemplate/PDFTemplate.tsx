import { formValuesAtom } from '@/store';
import { Document, Page, Text, StyleSheet, Image } from '@react-pdf/renderer';
import { useAtomValue } from 'jotai';
import { frames } from '@/constants/frames';

const styles = StyleSheet.create({
  page: {
    position: 'relative',
    flexDirection: 'column',
  },
  section: {
    padding: 10,
  },

  pic1: {
    position: 'absolute',
    objectFit: 'cover',
    width: 200,
    height: 322,
    left: 347,
    top: 120,
    zIndex: 3,
  },
  pic2: {
    position: 'absolute',
    objectFit: 'cover',
    width: 200,
    height: 322,
    left: 64,
    top: 485,
    zIndex: 3,
  },
  pic3: {
    position: 'absolute',
    objectFit: 'cover',
    width: 200,
    height: 322,
    left: 347,
    top: 485,
    zIndex: 3,
  },

  name: {
    position: 'absolute',
    left: 50,
    top: 100,
    fontWeight: 'bold',
    fontSize: 24,
    zIndex: 1,
  },

  quote: {
    position: 'absolute',
    left: 50,
    top: 125,
    fontStyle: 'italic',
  },

  bg: {
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    zIndex: 2,
  },
});

function PDFTemplate() {
  const formValues = useAtomValue(formValuesAtom);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{formValues.name}</Text>
        <Text style={styles.quote}>{formValues.quote}</Text>

        {formValues.media1! && (
          <Image
            src={URL.createObjectURL(formValues.media1)}
            style={styles.pic1}
          />
        )}
        {formValues.media2! && (
          <Image
            src={URL.createObjectURL(formValues.media2)}
            style={styles.pic2}
          />
        )}

        {formValues.media3! && (
          <Image
            src={URL.createObjectURL(formValues.media3)}
            style={styles.pic3}
          />
        )}
        <Image cache src={frames[formValues.frameId].src} style={styles.bg} />
      </Page>
    </Document>
  );
}

export default PDFTemplate;
