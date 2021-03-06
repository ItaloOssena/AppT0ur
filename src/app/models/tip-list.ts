import {ObjectID} from './object-id.enum';
const _tips = [
  `Questo pulsante permette di attivare o disattivare la possibilità di introdurre ottimizzazioni nel
  processo, implementazione Lean. Guarda nella parte inferiore della pagina: compariranno dei nuovi bottoni
  che ti permetteranno di scegliere l\'leanChange.`,
  `Questo pulsante permette di attivare o disattivare la possibilità di digitalizzare il processo, implementazione
  Digital. Guarda nella parte inferiore della pagina: compariranno dei nuovi bottoni che ti permetteranno di
  scegliere la tecnnologia.`,
  'Questo pulsante permette di ottimizzare il layout delle apparecchiature e delle strutture presenti nell\'area che stai analizzando',
  'Questo pulsante permette di ottimizzare [XXX] nell\'area che stai analizzando',
  'Questo pulsante permette di introdurre un elemento di digitalizzazione nelle apparecchiature presenti nell\'area che stai analizzando',
  'Questo pulsante permette di introdurre un elemento di digitalizzazione nei processi presenti nell\'area che stai analizzando',
  `Rappresentazione dell\'andamento nell\'ultimo mese per il parametro "Consumo di energia", fai un click sulla X
  in alto a destra per chiudere questa visualizzazione`,
  'Rappresentazione dell\'andamento nell\'ultimo mese per il parametro "Consumo di energia", fai un click per ingrandire',
  'Rappresentazione dell\'andamento nell\'ultimo mese per il parametro "Pezzi scartati", fai un click per ingrandire',
  'Rappresentazione dell\'andamento nell\'ultimo mese per il parametro "AAA", fai un click per ingrandire',
  'Rappresentazione dell\'andamento nell\'ultimo mese per il parametro "BBB", fai un click per ingrandire',
  'Visulizzazione della object-view dello stabilimento',
  `Area dello stabilimento adibita a "Magazzino". Tocca per entrare e visualizzarne le apparecchiature e le
  strutture, questo ti permetterà di provare ad applicare delle migliorie e valutarne l\'impatto`,
  'piantinaChild2',
  'piantinaChild3',
  'piantinaChild4',
  'piantinaChild5',
  'viewMagazzino',
  'magazzinoChild1',
  'magazzinoChild2',
  'magazzinoChild3',
  'viewPreparazione',
  'preparazioneChild1',
  'preparazioneChild2',
  'preparazioneChild3',
  'preparazioneChild4',
  'preparazioneChild5',
  'viewLavorazione',
  'lavorazioneChild1',
  'lavorazioneChild2',
  'lavorazioneChild3',
  'lavorazioneChild4',
  'lavorazioneChild5',
  'viewFinitura',
  'finituraChild1',
  'finituraChild2',
  'finituraChild3',
  'finituraChild4',
  'finituraChild5',
  'viewMagazzinoF',
  'magazzinoFChild1',
  'magazzinoFChild2',
  'magazzinoFChild3',
  'magazzinoFChild4',
  'magazzinoFChild5',
];
export class TipList {
  constructor() {}
  public getTip(index: ObjectID) {
    return _tips[index];
  }
}
