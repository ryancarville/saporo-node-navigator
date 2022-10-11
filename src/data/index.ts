// mock data collection - implements IMockData interface
import type { IMockData } from '../types/mockData'

export const data: IMockData[] = [
  {
    id: '1',
    name: 'Node 1',
    summary:
      'Voluptate sunt ullamco id est veniam. Deserunt non dolore consectetur ullamco in ad veniam ullamco ex consectetur.',
    description:
      'Minim aliqua consectetur excepteur minim cillum ad irure incididunt in sit. Ad culpa tempor laboris officia aute nisi officia exercitation. Minim adipisicing aliqua velit eiusmod eiusmod aute anim sit eiusmod non pariatur amet. Dolor et in ad aute sunt nostrud reprehenderit nisi anim cupidatat consectetur tempor commodo. Aliqua deserunt magna elit minim duis tempor esse cupidatat. Voluptate sunt ullamco id est veniam. Deserunt non dolore consectetur ullamco in ad veniam ullamco ex consectetur.',
    connections: ['2', '6', '10']
  },
  {
    id: '2',
    name: 'Node 2',
    summary:
      'Ut non nulla eu consequat anim velit tempor. Excepteur enim voluptate sint fugiat culpa ea. Nisi esse adipisicing nostrud ullamco occaecat do sunt consequat reprehenderit.',
    description:
      'Id officia est id exercitation laborum nisi ea voluptate id culpa dolor et voluptate laboris. Fugiat nulla consequat duis laborum. Incididunt irure non ad nisi reprehenderit exercitation. Nostrud laborum fugiat velit dolor magna ipsum laborum dolore est adipisicing est veniam tempor. Sint cupidatat enim esse ex. Duis officia magna nisi culpa aute sint dolor consectetur. Adipisicing Lorem reprehenderit ullamco ut sit mollit elit.',
    connections: ['1', '7', '9', '10']
  },
  {
    id: '3',
    name: 'Node 3',
    summary:
      'Deserunt mollit et nostrud minim. Labore adipisicing proident mollit nisi consequat duis cillum id nisi ea non dolor.',
    description:
      'Nulla culpa labore laborum officia. Exercitation culpa consequat velit pariatur in amet aliquip. Incididunt ea tempor reprehenderit minim dolor deserunt do. Mollit sunt nisi quis est culpa. Cupidatat culpa non veniam cillum velit non eiusmod proident. In mollit do labore eiusmod et in.>Cillum labore sint consequat ullamco veniam voluptate cupidatat do veniam. Sunt do occaecat sit dolor aliqua fugiat ipsum aute occaecat consectetur. Aute enim mollit ad qui consequat elit aute id anim eiusmod aute dolor sint voluptate.',
    connections: []
  },
  {
    id: '4',
    name: 'Node 4',
    summary:
      'Tempor et dolor et voluptate minim non ullamco culpa nulla minim officia ipsum. Enim voluptate nisi consectetur occaecat enim labore velit dolor exercitation labore.',
    description:
      'Commodo ut adipisicing veniam quis aliqua consequat tempor id aliquip. Aliqua non eu sint labore consequat consequat laborum et duis deserunt sit proident anim reprehenderit. Officia duis voluptate consectetur incididunt eu ipsum magna.Sit excepteur laborum eiusmod in. Labore proident velit nisi sint cillum ea. Commodo anim id ullamco ea fugiat est deserunt duis reprehenderit laboris aliqua consectetur officia.',
    connections: ['1', '5', '8', '9']
  },
  {
    id: '5',
    name: 'Node 5',
    summary:
      'Occaecat cupidatat nisi minim anim id. Deserunt deserunt ipsum deserunt anim incididunt aliquip.',
    description:
      'Non nostrud aute consectetur dolor officia esse velit veniam cillum mollit reprehenderit proident cillum. Eiusmod enim elit eiusmod elit ut labore ut nostrud exercitation tempor. Non culpa ut esse anim pariatur ipsum. Et qui est labore in ea culpa non mollit laboris. Irure anim officia ipsum do deserunt magna eiusmod do Lorem aliqua elit adipisicing excepteur voluptate. Eiusmod ad tempor laborum laboris occaecat fugiat nulla proident reprehenderit sunt excepteur veniam sit.',
    connections: ['4', '6', '7', '8']
  },
  {
    id: '6',
    name: 'Node 6',
    summary:
      'Exercitation do aliquip mollit est do in cupidatat velit. Ea culpa aliqua ut ea adipisicing. Enim occaecat minim elit adipisicing. Do minim magna dolore amet amet enim esse irure non amet excepteur consectetur.',
    description:
      'Eiusmod velit cupidatat sit tempor voluptate ad. Laborum nisi ullamco est aliquip fugiat consectetur deserunt laboris Lorem. Irure cupidatat elit laboris eu. Eiusmod deserunt eiusmod do veniam nostrud cupidatat enim. Ex nisi veniam aliqua minim proident veniam qui. Cupidatat reprehenderit anim duis quis.Ea velit labore reprehenderit non laboris culpa quis. Exercitation velit minim cupidatat quis excepteur proident eiusmod minim nisi occaecat veniam do. Ex veniam in nisi aliquip est voluptate enim reprehenderit culpa. Fugiat sunt Lorem irure nulla irure qui laboris minim consequat eiusmod sunt magna excepteur. Culpa aute est velit culpa ex eu excepteur aute aute officia enim ex incididunt in. Enim sint et velit labore qui ut. Irure magna veniam consectetur excepteur irure pariatur id magna incididunt.',
    connections: ['1', '5', '8', '9']
  },
  {
    id: '7',
    name: 'Node 7',
    summary:
      'Anim incididunt consectetur labore ex. Excepteur in deserunt exercitation excepteur aliquip exercitation ad excepteur amet.',
    description:
      'Labore cillum elit proident ea officia. Ipsum nulla Lorem proident laboris laboris aute. Aliqua adipisicing ullamco nostrud ad Lorem do incididunt est eu adipisicing ut dolore irure. Sunt ex proident minim amet et. Ex aliquip ad sit ex amet anim sunt do cupidatat Lorem exercitation enim ipsum esse.Nostrud quis officia veniam cillum anim proident. Sit ut in qui velit est commodo magna id ex cupidatat. Id eiusmod dolor laboris nisi excepteur dolore enim ut minim reprehenderit non deserunt eu duis. Magna cillum esse ullamco laboris et voluptate consectetur eiusmod in deserunt Lorem deserunt.',
    connections: ['2', '5', '8', '10']
  },
  {
    id: '8',
    name: 'Node 8',
    summary:
      'Sunt magna adipisicing sunt est magna incididunt cupidatat labore esse exercitation tempor exercitation excepteur non.',
    description:
      'Anim non est consequat non dolore in sint esse fugiat ad anim enim id. Duis id quis fugiat incididunt. Elit enim sit pariatur do culpa. Adipisicing quis nisi dolor consectetur minim laborum dolore nulla esse. Culpa reprehenderit ad nisi voluptate aliqua.Labore aute pariatur proident aute proident enim ea amet ex dolor incididunt elit. Consectetur deserunt reprehenderit enim minim fugiat culpa officia sunt deserunt ipsum. Excepteur esse nostrud nisi excepteur Lorem ipsum est adipisicing. Voluptate aliqua elit dolor nulla ex mollit sint velit ad ex dolore elit deserunt laborum. Id tempor consequat pariatur minim nisi cupidatat ex duis minim irure culpa consectetur culpa deserunt. Id quis sunt elit commodo voluptate exercitation.',
    connections: ['4', '5', '6', '7', '9', '10']
  },
  {
    id: '9',
    name: 'Node 9',
    summary:
      'Do dolor cupidatat qui enim ullamco excepteur laboris aliqua velit nostrud. Non sunt eu anim quis adipisicing elit excepteur tempor. In velit laborum in sit qui qui do incididunt amet.',
    description:
      'Adipisicing officia minim sint ex enim. Consectetur aliqua amet cupidatat do mollit ex in sunt exercitation. Proident irure mollit proident veniam commodo esse. Mollit ex tempor dolore labore cillum. Pariatur ut minim exercitation sunt in ad incididunt labore exercitation ipsum.Minim ad sint minim ad esse excepteur adipisicing nostrud ipsum exercitation cupidatat consectetur nostrud. Sunt dolore magna velit cillum. Id laborum sit consequat commodo pariatur in cupidatat eu. Excepteur officia ex eiusmod non tempor et sint ea in reprehenderit dolore.',
    connections: ['2', '4', '5', '6', '8', '10']
  },
  {
    id: '10',
    name: 'Node 10',
    summary:
      'Nostrud sit consequat pariatur laborum. Ex labore officia deserunt anim. Veniam commodo sit sit ut fugiat veniam dolore ut eiusmod quis Lorem nisi reprehenderit.',
    description: 'Ea nulla sit adipisicing voluptate voluptate anim cillum elit sint sint eu. Labore ad sunt mollit veniam velit excepteur commodo officia nostrud ad aliqua. Est amet mollit anim aute proident qui officia deserunt et do dolor incididunt ea proident.Aliquip consequat esse eiusmod culpa magna deserunt ullamco est. Eiusmod culpa esse consequat et ea duis veniam sunt Lorem. Duis in culpa consectetur velit dolore esse amet duis aliqua dolore dolor ut laboris. Sunt esse esse ex officia voluptate qui consectetur laborum sint culpa. Qui eiusmod ea sint esse voluptate. Sint et consequat minim mollit consequat ipsum deserunt.',
    connections: ['1', '2', '7', '8', '9']
  }
];
