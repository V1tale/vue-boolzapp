const {createApp} = Vue;
const time = luxon.DateTime;
let searchContact = "";
createApp({
    data(){
        return {
    currentContact: 0,
    contacts: [
    {
        name: 'Marge',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ti avevo chiesto di comprare i pannolini per Maggie e tu sei tornato con una scatola piena di fagioli magici',
                status: 'received'
            },
            {
                date: '10/01/2020 16:17:00',
                message: 'Il tizio ha detto che se li pianti, creascerà un albero di pannolini',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non esiste una cosa simile! ti fai sempre imbrogliare dai passanti',
                status: 'received'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'se sei così sicura di quello che dici, allora perchè non vai in giardino a piantarli e vediamo chi ha ragione?',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Barth',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Barth! porta a spasso il cane',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Io sono più un tipo da TV',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Ok allora. Porta a spasso la tv',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Lisa',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'Mi accompagneresti in biblioteca? devo fare una ricerca sulla fermentazione',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Oh! tesoro, per quello esiste un posto ancora più bello ed altrettanto istruttivo',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Non andremo alla fabbrica di birra',
                status: 'received'
            }
        ],
    },
    {
        name: 'Boe',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Questa sera siamo chiusi. Gli ispettori hanno trovato insetti quasi morti sotto al bancone',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Te lo scordi! questa sera, tutti da me',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:53:00',
                message: 'Sicuro che a Marge non darà fastidio?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:54:30',
                message: 'Ma figurati. Starà tutto il giorno in giardino a piantare stupidi fagioli',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Lenny',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: `Hey Lenny. L'allarme rosso con su scritto "fusione nocciolo", è una cosa grave? `,
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'prova a spegnere e riaccendere il computer di controllo, magari si spegne',
                status: 'received'
            }
        ],
    },
    {
        name: 'Comm. Whinchester',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Commissario, voglio denunciare un procione che ogni sera rovista nei miei bidoni',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Spiacente Wagliò. Se lo arrestassi, quelli della protezione animali, mi faranno assistere a qualche inutile seminario',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'E io cosa dovrei fare?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:52:00',
                message: 'Io la butto li: hai pensato di adottarlo?',
                status: 'received'
            }
        ],
    },
    {
        name: 'Flanders',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Potresti darmi il tosaerba?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Perchè non te ne compri uno tutto tuo?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:32:55',
                message: `In realtà quello è il mio. l'hai preso in prestito due anni fa `,
                status: 'received'
            },
            {
                date: '10/01/2020 15:34:55',
                message: `Bell'amico che sei, rinfacciare il fatto di avermi prestato il tosaerba.`,
                status: 'sent'
            },
        ],
    },
    {
        name: 'Mr. Smithers',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Signor Simpson, è già il terzo incidente nucleare questa settimana',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Lo so. Quando voglio so dare il meglio di me. Le prometto che la prossima settimana saranno il doppio',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'No, per favore, no!',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: `Non si preoccupi. Tutto per l'azienda`,
                status: 'sent'
            }
        ],
    }
    ]
    }
    },
    methods: {
    moveIndex(index) {
        this.currentContact = index
    },
    sendMessage: function() {
        if (this.newMessage != "") {
    this.contacts[this.currentContact].messages.push(
        {
            date: this.timeGenerator(),
            message:this.newMessage,
            status:'sent',
        }
    )
    this.newMessage = null;
    setTimeout(() => {
        this.contacts[this.currentContact].messages.push(
            {
                date: this.timeGenerator(),
                message:'ok',
                status:'received',
            }
        )
        },1000)
    }},
    timeGenerator() {
        return time
          .now().setLocale("it").toLocaleString(time.DATETIME_SHORT_WITH_SECONDS);
      },
    
    filter() {
        console.log("funziona");
    for (let i = 0; i < this.contacts.length; i++) {
    const checkName = this.contacts[i].name.toLowerCase();
    console.log(checkName);
        if(checkName.toLowerCase().includes(this.searchContact.toLowerCase())) {
        visible = true
        } else {
        visible = false
        this.hideElement()
        }
        console.log(visible);
    }
    },
}
}).mount("#app")
