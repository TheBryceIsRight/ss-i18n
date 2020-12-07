import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useTranslation from '../hooks/useTranslation';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MenuItem from '@material-ui/core/MenuItem';





const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }),
);

const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

const useStyles2 = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  });



interface MCC {
    title: string;
    tag: number;
  }
  
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const business_descriptions = [
    { title:"HOWARD JOHNSON",tag:564},
    { title:"MOUNT CHARLOTTE THISTLE",tag:565},
    { title:"HYATT HOTELS",tag:566},
    { title:"SOFITEL HOTELS",tag:567},
    { title:"STEIGENBERGER HOTELS",tag:569},
    { title:"ECONO LODGES",tag:570},
    { title:"QUEENS MOAT HOUSES",tag:571},
    { title:"SWALLOW HOTELS",tag:572},
    { title:"HUSA HOTELS",tag:573},
    { title:"RADISSON HOTELS",tag:575},
    { title:"RED ROOF INNS",tag:576},
    { title:"IMPERIAL LONDON HOTEL",tag:577},
    { title:"EMBASSY HOTELS",tag:578},
    { title:"PENTA HOTELS",tag:579},
    { title:"SCANDIC HOTELS",tag:581},
    { title:"Gol Airlines",tag:5965},
    { title:"OBEROI HOTELS",tag:583},
    { title:"NEW OTANI HOTELS",tag:584},
    { title:"TAJ HOTELS INTERNATIONAL",tag:585},
    { title:"METROPOLE HOTELS",tag:587},
    { title:"CIRCUS CIRCUS HOTEL",tag:588},
    { title:"HOTELES EL PRESIDENTE",tag:589},
    { title:"FLAG INN",tag:590},
    { title:"RESO HOTELS",tag:561},
    { title:"STAKIS HOTELS",tag:592},
    { title:"MARITIM HOTELS",tag:594},
    { title:"ELDORADO HOTEL/CASIN",tag:595},
    { title:"ARCTIA HOTELS",tag:597},
    { title:"CAMPANILE HOTELS",tag:598},
    { title:"IBUSZ HOTELS",tag:599},
    { title:"RANTASIPI HOTELS",tag:600},
    { title:"INTERHOTEL CEDOK",tag:601},
    { title:"CLIMAT DE FRANCE HOTELS",tag:603},
    { title:"CUMULUS HOTELS",tag:604},
    { title:"SILVER LEGACY HOTEL",tag:605},
    { title:"HOTEIS OTHAN",tag:606},
    { title:"ADAMS MARK HOTELS",tag:607},
    { title:"SAHARA HOTEL/CASIN",tag:608},
    { title:"BUDGET HOST INN",tag:610},
    { title:"BUDGETEL INNS",tag:611},
    { title:"SUSSE CHALET",tag:612},
    { title:"CLARION HOTELS",tag:613},
    { title:"COMPRI HOTELS",tag:614},
    { title:"COURTYARD BY MARRIOT",tag:616},
    { title:"DILLON INNS",tag:617},
    { title:"DOUBLETREE GUEST SUITES",tag:618},
    { title:"DRURY INNS",tag:619},
    { title:"EMBASSY SUITES",tag:621},
    { title:"EYEL INNS",tag:622},
    { title:"FAIRFIELD HOTELS",tag:623},
    { title:"HARLEY HOTELS",tag:624},
    { title:"MIDWAY MOTOR LODGE",tag:625},
    { title:"MOTEL 6",tag:626},
    { title:"LA MANSION DEL RI",tag:627},
    { title:"RESIDENCE INNS",tag:629},
    { title:"ROYCE HOTELS",tag:630},
    { title:"SANDMAN INNS",tag:631},
    { title:"SHILO INNS",tag:632},
    { title:"SHONEY'S INNS",tag:633},
    { title:"SUPER 8 MOTELS",tag:635},
    { title:"RITZ CARLTON",tag:636},
    { title:"FLAG INNS (AU)",tag:637},
    { title:"BUFFALO BILL'S HOTEL",tag:638},
    { title:"QUALITY PACIFIC HOTEL",tag:639},
    { title:"FOUR SEASONS HOTEL (AU)",tag:640},
    { title:"CARLTON HOTELS",tag:642},
    { title:"CITY LODGE HOTELS",tag:643},
    { title:"KAROS HOTELS",tag:644},
    { title:"PROTEA HOTELS",tag:645},
    { title:"SOUTHERN SUN HOTELS",tag:646},
    { title:"WYNDHAM",tag:648},
    { title:"SEAPINES PLANTATION",tag:650},
    { title:"RIO SUITES",tag:651},
    { title:"BROADMOOR HOTEL",tag:652},
    { title:"JOHN ASCUAGA'S NUGGE",tag:654},
    { title:"MGM GAND HOTEL",tag:655},
    { title:"HARRAH'S HOTELS/CASINO'S",tag:656},
    { title:"OPRYLAND HOTEL",tag:657},
    { title:"HARVEY/BRISTOL HOTELS",tag:659},
    { title:"MASTERS ECONOMY INNS",tag:660},
    { title:"COLORADO BELLE/EDGEWATER RESOR",tag:661},
    { title:"SAROVA HOTELS",tag:562},
    { title:"WOODSIDE HOTELS & RESORTS",tag:664},
    { title:"TOWNEPLACE SUITES",tag:665},
    { title:"MILLENNIUM HOTELS",tag:666},
    { title:"CLUB MED",tag:667},
    { title:"BILTMORE HOTEL & SUITES",tag:669},
    { title:"ST. REGIS HOTEL",tag:670},
    { title:"ELIOT HOTELS",tag:671},
    { title:"CLUBCORP/CLUBRESORTS",tag:672},
    { title:"WELLESLEY INNS",tag:673},
    { title:"BEVERLY HILLS HOTEL",tag:674},
    { title:"PEABODY HOTELS",tag:677},
    { title:"GREENBRIAR RESORTS",tag:678},
    { title:"AMELIA ISLAND PLANTATION",tag:679},
    { title:"HOMESTEAD",tag:680},
    { title:"CANYON RAN",tag:682},
    { title:"KAHALA MANDARIN ORIENTAL",tag:683},
    { title:"WHISKEY PETE'S HOTEL ",tag:687},
    { title:"CHATEAU ELAN RESOR",tag:688},
    { title:"BEAU RIVAGE HOTEL/CASIN",tag:689},
    { title:"BELLAGI",tag:690},
    { title:"FREMONT HOTEL/CASIN",tag:691},
    { title:"SILVER STAR HOTEL/CASIN",tag:693},
    { title:"STRATOSPHERE HOTEL/CASIN",tag:694},
    { title:"SPRINGHILL SUITES",tag:695},
    { title:"CAESAR'S HOTEL/CASIN",tag:696},
    { title:"NEMACOLIN WOODLANDS",tag:697},
    { title:"VENETIAN RESORT HOTEL AND CASINO",tag:698},
    { title:"NEW YORK-NEW YORK HOTEL/CASIN",tag:699},
    { title:"NEVELEGRAND",tag:701},
    { title:"MANDALAYBAY ",tag:702},
    { title:"FOURPOINTS",tag:703},
    { title:"WHOTELS",tag:704},
    { title:"PATRICIAGRAND",tag:706},
    { title:"Railroad Freight Transportation",tag:707},
    { title:"Railways-Commuter Transportation",tag:711},
    { title:"Railways- Passenger",tag:714},
    { title:"Air Ambulance Services",tag:722},
    { title:"Ambulance Services",tag:723},
    { title:"Emergency Vehicle Services",tag:724},
    { title:"Limousine Services (multi-vehicle)",tag:732},
    { title:"Bus Lines",tag:734},
    { title:"Delivery Services - Local",tag:755},
    { title:"Business-to-business video conference services",tag:5979},
    { title:"Spirit Airlines",tag:5967},
    { title:"WYNN LAS VEGAS",tag:5968},
    { title:"RIVERSIDE RESORT HOTEL AND CASINO",tag:5969},
    { title:"SKYWAYS AIR",tag:5970},
    { title:"RYANAIR",tag:5964},
    { title:"SIXT Car Rental",tag:5971},
    { title:"KAUAI COCONOUT BEACH RESORTS",tag:5972},
    { title:"ROYAL KONA RESORT",tag:5973},
    { title:"BARTON CREEK RESORT",tag:5975},
    { title:"EMBASSY VACATION RESORT",tag:5976},
    { title:"EASYJET AIR",tag:5977},
    { title:"Non-business-to-business audio-text and/or digital content",tag:5980},
    { title:"DATING SERVICES",tag:5981},
    { title:"DATING SERVICES",tag:5982},
    { title:"Stereo Equipment & Accessories",tag:3437},
    { title:"Television Stores",tag:3438},
    { title:"Music Stores - Musical Instruments, Pianos and sheet music",tag:3439},
    { title:"Record, Tape, CD & Compact Disc Sales",tag:3441},
    { title:"Caterers",tag:3442},
    { title:"Eating Places and Restaurants (Non-Fast Food)",tag:3443},
    { title:"Bars, Saloons, Pubs, Taverns, Lounges, Breweries",tag:3464},
    { title:"Comedy Clubs",tag:3465},
    { title:"Night Clubs",tag:3466},
    { title:"Strip Bars",tag:3468},
    { title:"Restaurants - Fast Food",tag:3469},
    { title:"Drug Stores & Pharmacies",tag:3470},
    { title:"Bottled Beer, Wine & Liquor Sales",tag:3477},
    { title:"Liquor Stores",tag:3478},
    { title:"Package Alcohol Sales",tag:3479},
    { title:"Consignment Shops",tag:3492},
    { title:"Thrift Stores",tag:3494},
    { title:"Used Merchant and Secondhand Stores",tag:3495},
    { title:"Antique Shops",tag:3498},
    { title:"Furniture Repair & Restoration",tag:3499},
    { title:"Pawn Shops",tag:3500},
    { title:"Antique Reproductions",tag:3502},
    { title:"Bicycle Shops - Sales & Service",tag:3503},
    { title:"Backpacking, Hiking & Camping Equipment",tag:3546},
    { title:"Billiard Tables - Sales",tag:3548},
    { title:"Fishing Equipment, Bait & Tackle",tag:3549},
    { title:"Golf Equipment",tag:3550},
    { title:"Sporting Goods Stores",tag:3552},
    { title:"Book Stores",tag:3555},
    { title:"Pornographic book stores",tag:3556},
    { title:"STATIONERY,OFFICE AND SCHOOL SUPPLIES",tag:3557},
    { title:"Jewelry Stores",tag:3558},
    { title:"Camera and Photographic Supplies Stores",tag:3560},
    { title:"Gift, Card, Novelty & Souvenir Shops",tag:3561},
    { title:"Luggage & Leather Goods Stores",tag:3562},
    { title:"Sewing, Needlework, Fabric & Piece Goods Stores",tag:3563},
    { title:"Glassware & Crystal Stores",tag:3564},
    { title:"Direct Marketing -Insurance Sales",tag:3565},
    { title:"Garden Place Hotel",tag:3566},
    { title:"Soho Grand Hotel",tag:3567},
    { title:"Travel Clubs",tag:3568},
    { title:"Tribeca Grand Hotel",tag:3569},
    { title:"Direct Marketing Catalog & Retail Merchant",tag:3572},
    { title:"Outbound Telemarketing",tag:3573},
    { title:"Freight Carriers, Trucking & Storage",tag:756},
    { title:"Inbound Telemarketing",tag:3574},
    { title:"Magazine Subscriptions",tag:3575},
    { title:"Hotel Del Coronado",tag:3580},
    { title:"Fireplace & Fireplace Accessory Stores",tag:3340},
    { title:"Arizona Biltmore",tag:3594},
    { title:"Cosmetics-Direct Sales",tag:3759},
    { title:"Credit Repair Services",tag:3760},
    { title:"Diet Marketers",tag:3761},
    { title:"Direct Marketing - Other Direct -Not Elsewhere Classified",tag:3762},
    { title:"Prize Give Aways",tag:3765},
    { title:"Solar Heating Products",tag:3767},
    { title:"Sports Forecasting/Odds making",tag:3768},
    { title:"Telephone Chat Lines",tag:3769},
    { title:"Vitamins - Direct Sales",tag:3770},
    { title:"Water Purification Marketers",tag:3771},
    { title:"Artist's Supply & Craft Shops",tag:3772},
    { title:"BRITISH AWYS",tag:2},
    { title:"JAL AIRLINE",tag:3},
    { title:"AIR FRANCE",tag:4},
    { title:"LUFTHANS",tag:5},
    { title:"AIR CANAD",tag:6},
    { title:"KLM AIRLINE",tag:7},
    { title:"AEROFL",tag:8},
    { title:"QANTAS AI",tag:9},
    { title:"ALITALIA AI",tag:10},
    { title:"SAUDIA AI",tag:11},
    { title:"Swiss International Airlines",tag:12},
    { title:"SAS AIRLINE",tag:13},
    { title:"SAA AIRWAYS",tag:14},
    { title:"VARIG AI",tag:15},
    { title:"AIR-INDI",tag:16},
    { title:"AIR ALGERIE",tag:17},
    { title:"PAL AIR",tag:18},
    { title:"MEYICANA AI",tag:19},
    { title:"PAKISTAN AI",tag:20},
    { title:"DRAGON AIRLINES",tag:1},
    { title:"AIR N",tag:21},
    { title:"EMIRATES",tag:22},
    { title:"UTA AIRLINE",tag:23},
    { title:"AIR MALT",tag:24},
    { title:"SN Brussels Airlines",tag:25},
    { title:"AERO ARGEN",tag:26},
    { title:"OLYMPIC AI",tag:27},
    { title:"EL AL AI",tag:28},
    { title:"ANSETT AI",tag:29},
    { title:"TAP AIRLINE",tag:31},
    { title:"VASP AI",tag:32},
    { title:"EGYPTAI",tag:33},
    { title:"KUWAIT AI",tag:34},
    { title:"AVIANCA AI",tag:35},
    { title:"GULF AI",tag:36},
    { title:"BALKAN AI",tag:37},
    { title:"FINNAI",tag:38},
    { title:"AER LINGUS",tag:39},
    { title:"Animal Doctors",tag:52},
    { title:"Animal Hospitals",tag:53},
    { title:"Pet Clinics",tag:54},
    { title:"Veterinary Services",tag:55},
    { title:"Farm Management Services",tag:62},
    { title:"Orchards",tag:63},
    { title:"Vineyards",tag:64},
    { title:"Gardening Services",tag:71},
    { title:"Horticultural Services",tag:72},
    { title:"Landscaping Services",tag:73},
    { title:"Building Contractors-Residential or Commercial",tag:80},
    { title:"Construction Companies",tag:81},
    { title:"Constuction-General Contractors",tag:82},
    { title:"Air Conditioning Contractors",tag:89},
    { title:"Heating Contractors",tag:90},
    { title:"Plumbing Contractors",tag:91},
    { title:"Electrical Contractors",tag:92},
    { title:"Insulation Contractors",tag:113},
    { title:"Masonry Contractors",tag:114},
    { title:"Plastering Contractors",tag:115},
    { title:"Stonework Contractors",tag:116},
    { title:"Tile Setting Contractors",tag:117},
    { title:"Carpentry Contractors",tag:118},
    { title:"Roofing Contractors",tag:125},
    { title:"Sheet Metal Contractors",tag:126},
    { title:"Siding Contractors",tag:127},
    { title:"Asphalt Contractors",tag:130},
    { title:"Cement Contractors",tag:131},
    { title:"Contractors - Not elsewhere classified",tag:242},
    { title:"Decorating Contractors",tag:243},
    { title:"Demolition Contractors",tag:244},
    { title:"Garage Door Installation",tag:245},
    { title:"Glasswork Contractors",tag:246},
    { title:"Interior Decorators",tag:247},
    { title:"Painting Contractors",tag:248},
    { title:"Paper Hanging Contractors",tag:249},
    { title:"Special Trade Contractors",tag:250},
    { title:"Welding Contractors",tag:251},
    { title:"Well Drilling Contractors",tag:252},
    { title:"Bookbinding Services",tag:259},
    { title:"Printing Services",tag:260},
    { title:"Publishing Services",tag:261},
    { title:"Printing Plate Making Services",tag:264},
    { title:"Typesetting Services",tag:265},
    { title:"Cleaning Materials",tag:272},
    { title:"Cleaning Preparations",tag:273},
    { title:"Polishing & Sanitizing Materials",tag:274},
    { title:"UNITED AI",tag:275},
    { title:"AMERICAN AI",tag:276},
    { title:"PAN AM AI",tag:277},
    { title:"AIRLANK",tag:278},
    { title:"NIGERIA AI",tag:279},
    { title:"CRUZERIO AI",tag:280},
    { title:"TURKISH AIRLINES",tag:281},
    { title:"AIR MARO",tag:282},
    { title:"TUNIS AI",tag:283},
    { title:"ICELANDAI",tag:284},
    { title:"AUSTRIAN AI",tag:285},
    { title:"LAN Airlines - LAN AIR",tag:286},
    { title:"AVIACO AI",tag:287},
    { title:"LADECO AI",tag:288},
    { title:"LAB AIRLINE",tag:289},
    { title:"DELTA AI",tag:292},
    { title:"NWA AI",tag:293},
    { title:"CONTINENTAL",tag:294},
    { title:"USAIRWAYS",tag:295},
    { title:"ADRIA AIRWAYS",tag:296},
    { title:"AIRINTE",tag:297},
    { title:"SOUTHWESTAI",tag:298},
    { title:"VANGUARD AI",tag:299},
    { title:"AIR B",tag:300},
    { title:"SINGAPOREAI",tag:301},
    { title:"AEROMEYI",tag:302},
    { title:"THAI AIRWAYS",tag:303},
    { title:"CHINA AI",tag:304},
    { title:"KOREAN AI",tag:306},
    { title:"AIR AFRIQUE",tag:307},
    { title:"EVA AI",tag:308},
    { title:"MIDWEST EYP",tag:309},
    { title:"METRO AI",tag:311},
    { title:"CROATIA AI",tag:312},
    { title:"TRANSAER",tag:313},
    { title:"UNIAI",tag:314},
    { title:"ZAMBIA AI",tag:315},
    { title:"AIR ZIMBABWE",tag:316},
    { title:"SPANAI",tag:317},
    { title:"ASIANA AIRLINES",tag:318},
    { title:"CATHAYPACAI",tag:319},
    { title:"MALAY AI",tag:320},
    { title:"IBERIA AI",tag:321},
    { title:"GARUDA AI",tag:322},
    { title:"BRAATHENSAI",tag:323},
    { title:"BRMIDLANDAI",tag:325},
    { title:"WINDWRDISAI",tag:326},
    { title:"VIASA AI",tag:328},
    { title:"TAN AIRLINE",tag:330},
    { title:"TACAINTL AI",tag:332},
    { title:"SURINAM AI",tag:333},
    { title:"SUNWORLD AI",tag:334},
    { title:"FRONTIERAI",tag:335},
    { title:"SUDAN AI",tag:337},
    { title:"QATARAI",tag:338},
    { title:"VIRGINATLAI",tag:342},
    { title:"LUYAI",tag:344},
    { title:"AIRLITTORAL",tag:345},
    { title:"AIR ZAIRE",tag:346},
    { title:"PBA AIRLINE",tag:348},
    { title:"NORONTAI",tag:350},
    { title:"CANADIAN AI",tag:353},
    { title:"NATIONAI",tag:354},
    { title:"MESA AI",tag:357},
    { title:"MALEV AI",tag:358},
    { title:"LOT AIRLINE",tag:359},
    { title:"LIAT AIRLINE",tag:360},
    { title:"LAP AIRLINE",tag:362},
    { title:"LACSA AI",tag:363},
    { title:"JUGOSLAV AI",tag:364},
    { title:"ISLAND AI",tag:365},
    { title:"HAWAIIAN AI",tag:368},
    { title:"HAVASU AI",tag:369},
    { title:"GUYANA AI",tag:370},
    { title:"FREEDOM AI",tag:372},
    { title:"DOMINICA AI",tag:374},
    { title:"CSA AIRLINE",tag:377},
    { title:"COPA AIRLINE",tag:379},
    { title:"COMP FAU AI",tag:380},
    { title:"COMMAND AI",tag:382},
    { title:"COMAI",tag:383},
    { title:"CAYMANAI",tag:384},
    { title:"SAHSA AI",tag:386},
    { title:"CARIBBEAN AIRLINES",tag:388},
    { title:"BARHARBORAI",tag:391},
    { title:"BAHAMASAI",tag:392},
    { title:"AVENSA AI",tag:394},
    { title:"AUST AIRSERV",tag:395},
    { title:"ALOHA AI",tag:396},
    { title:"ALM AIRLINE",tag:397},
    { title:"ALASKA AI",tag:400},
    { title:"ATA AI",tag:401},
    { title:"AIR CHIN",tag:402},
    { title:"RENO AI",tag:403},
    { title:"AIR SEY",tag:404},
    { title:"AIR PANAM",tag:405},
    { title:"AIR JAMAI",tag:406},
    { title:"AIR DJIBOUTI",tag:407},
    { title:"AEROPER",tag:409},
    { title:"AERONICARAG",tag:410},
    { title:"AEROCOACH AV",tag:411},
    { title:"CYPRUS AI",tag:412},
    { title:"ECUATORIAN",tag:413},
    { title:"ETHIOPIAN AI",tag:414},
    { title:"KENYA AI",tag:415},
    { title:"TAROM AIR ",tag:416},
    { title:"AIRMAURITIUS",tag:417},
    { title:"AFFILIATED AUTO RENTAL",tag:419},
    { title:"AMERICAN INTL RENT-A-C",tag:420},
    { title:"BROOKS RENT-A-C",tag:421},
    { title:"ACTION AUTO RENTAL",tag:422},
    { title:"HERT",tag:423},
    { title:"PAYLESS CAR RENTAL",tag:424},
    { title:"SNAPPY CAR RENTAL",tag:425},
    { title:"AIRWAYS RENT-A-C",tag:426},
    { title:"ALTRA AUTO RENTAL",tag:427},
    { title:"AGENCY RENT-A-C",tag:428},
    { title:"BUDGET RENT-A-C",tag:429},
    { title:"HOLIDAY RENT-A-C",tag:430},
    { title:"RENT-A-WRECK",tag:431},
    { title:"AJAY RENT-A-C",tag:432},
    { title:"TRIANGLE RENT-A-C",tag:433},
    { title:"Europcar",tag:434},
    { title:"TROPICAL RENT-A-C",tag:435},
    { title:"SHOWCASE RENTAL CARS",tag:436},
    { title:"ALAMO RENT-A-C",tag:437},
    { title:"AVIS RENT-A-C",tag:438},
    { title:"DOLLAR RENT-A-C",tag:439},
    { title:"EUROPE BY C",tag:440},
    { title:"NATIONAL CAR RENTAL",tag:441},
    { title:"KEMWELL GROUP RENT-A-C",tag:442},
    { title:"THRIFTY RENT-A-C",tag:443},
    { title:"TILDEN RENT-A-C",tag:444},
    { title:"ECONO-CAR RENT-A-C",tag:445},
    { title:"AUTO HOST CAR RENTALS",tag:446},
    { title:"ENTERPRISE RENT-A-C",tag:447},
    { title:"GENERAL RENT-A-C",tag:448},
    { title:"A-1 RENT-A-C",tag:449},
    { title:"ANSA INTL RENT-A-C",tag:451},
    { title:"ALLSTATE RENT-A-C",tag:452},
    { title:"AVCAR RENT-A-C",tag:453},
    { title:"AUTOMATE RENT-A-C",tag:454},
    { title:"AVON RENT-A-C",tag:455},
    { title:"CAREY RENT-A-C",tag:456},
    { title:"INSURANCE RENT-A-C",tag:457},
    { title:"MAJOR RENT-A-C",tag:458},
    { title:"REPLACEMENT RENT-A-C",tag:459},
    { title:"RESERVE RENT-A-C",tag:460},
    { title:"UGLY DUCKLING RENT-A-C",tag:461},
    { title:"USA RENT-A-C",tag:462},
    { title:"VALUE RENT-A-C",tag:463},
    { title:"AUTOHANSA RENT-A-C",tag:464},
    { title:"INTERENT RENT-A-C",tag:466},
    { title:"MILLEVILLE RENT-A-C",tag:467},
    { title:"ADVANTAGE RENT-A-C",tag:468},
    { title:"HOLIDAY INNS",tag:469},
    { title:"BEST WESTERN HOTELS",tag:470},
    { title:"SHERATON",tag:471},
    { title:"HILTON HOTELS",tag:472},
    { title:"FORTE HOTELS",tag:473},
    { title:"GOLDEN TULIP HOTELS",tag:474},
    { title:"FRIENDSHIP INNS",tag:475},
    { title:"QUALITY INNS",tag:476},
    { title:"MARRIOTT HOTELS",tag:477},
    { title:"DAYS INNS",tag:478},
    { title:"ARABELLA HOTELS",tag:479},
    { title:"INTER-CONTINENTAL HOTELS",tag:480},
    { title:"WESTIN (WESTIN HOTELS)",tag:481},
    { title:"AMERISUITES",tag:482},
    { title:"RODEWAY INNS",tag:483},
    { title:"LA QUINTA MOTOR INNS",tag:484},
    { title:"AMERICANA HOTELS",tag:485},
    { title:"SOL HOTELS",tag:486},
    { title:"PULLMAN INTL HOTELS",tag:487},
    { title:"MERIDIEN HOTELS",tag:488},
    { title:"TOKYO HOTEL",tag:489},
    { title:"PENINSULA HOTEL",tag:490},
    { title:"WELCOMGROUP HOTELS",tag:491},
    { title:"DUNFEY HOTELS",tag:492},
    { title:"PRINCE HOTELS",tag:493},
    { title:"DOWNTOWNER-PASSPORT HOTEL",tag:494},
    { title:"RED LION HOTELS/INNS",tag:495},
    { title:"CP HOTELS",tag:496},
    { title:"RENAISSANCE HOTELS",tag:497},
    { title:"HOTEL IBIS",tag:498},
    { title:"SOUTHERN PACIFIC HOTEL",tag:499},
    { title:"HILTON INTERNATIONALS",tag:500},
    { title:"AMFAC HOTELS",tag:501},
    { title:"ANA HOTEL",tag:502},
    { title:"CONCORDE HOTELS",tag:503},
    { title:"SUMMERFIELD SUITES HOTELS",tag:504},
    { title:"IBEROTEL HOTELS",tag:505},
    { title:"HOTEL OKUR",tag:506},
    { title:"ROYAL HOTELS",tag:507},
    { title:"FOUR SEASONS HOTELS",tag:508},
    { title:"CIGA HOTELS",tag:509},
    { title:"SHANGRI-LA INTL HOTELS",tag:510},
    { title:"HOTEL SIERRA",tag:511},
    { title:"HOTELES MELI",tag:512},
    { title:"AUBERGE DES GOVERNEURS",tag:513},
    { title:"REGAL 8 INNS",tag:514},
    { title:"MIRAGE HOTEL/CASIN",tag:515},
    { title:"COAST HOTELS",tag:516},
    { title:"PARK INNS INT'L",tag:517},
    { title:"JOLLY HOTELS",tag:519},
    { title:"GOLDEN NUGGE",tag:520},
    { title:"COMFORT INNS",tag:521},
    { title:"JOURNEY'S END MOTELS",tag:522},
    { title:"SAM'S TOWN HOTEL/CASIN",tag:523},
    { title:"RELAY INNS",tag:524},
    { title:"LADBROKE HOTELS",tag:525},
    { title:"FORUM HOTELS",tag:526},
    { title:"MIYAKO HOTELS",tag:527},
    { title:"SANDMAN HOTELS",tag:528},
    { title:"VENTURE INNS",tag:529},
    { title:"VAGABOND HOTELS",tag:530},
    { title:"MANDARIN ORIENTAL HOTEL",tag:531},
    { title:"HOTEL MERCURE",tag:532},
    { title:"DELTA HOTEL",tag:533},
    { title:"CALIFORNIA HOTEL/CASIN",tag:534},
    { title:"PRINCESS HOTELS INTL",tag:536},
    { title:"HUNGAR HOTELS",tag:537},
    { title:"Bed & Bath Shops",tag:3397},
    { title:"DORAL HOTELS",tag:538},
    { title:"HELMSLEY HOTELS",tag:539},
    { title:"FAIRMONT HOTELS",tag:540},
    { title:"SONESTA HOTELS",tag:541},
    { title:"OMNI HOTELS",tag:542},
    { title:"CUNARD HOTELS",tag:543},
    { title:"HOSPITALITY INNS",tag:544},
    { title:"REGENT INTL HOTELS",tag:545},
    { title:"PANNONIA HOTELS",tag:546},
    { title:"Cookware Stores",tag:3398},
    { title:"NOAH'S HOTELS",tag:547},
    { title:"Cutlery Stores",tag:3399},
    { title:"MOEVENPICK HOTELS",tag:548},
    { title:"TRAVELODGE",tag:549},
    { title:"BINION'S HORSESHOE CLUB",tag:550},
    { title:"MERLIN HOTELS",tag:551},
    { title:"DORINT HOTELS",tag:552},
    { title:"LADY LUCK HOTEL/CASIN",tag:553},
    { title:"HOTEL UNIVERSALE",tag:554},
    { title:"EYCALIBUR HOTEL/CASIN",tag:555},
    { title:"Housewares Stores",tag:3400},
    { title:"Lighting Stores",tag:3401},
    { title:"Linen Shops",tag:3402},
    { title:"Miscellaneous Home Furnishing Specialty Stores",tag:3403},
    { title:"Pottery Stores",tag:3404},
    { title:"Sewing Machine Stores",tag:3412},
    { title:"Vacuum Cleaner Stores",tag:3413},
    { title:"Computer Hardware",tag:3434},
    { title:"Electronic Repair Shops",tag:3435},
    { title:"Electronic Sales",tag:3436},
    { title:"DAN HOTELS",tag:556},
    { title:"SLEEP INN",tag:557},
    { title:"PHOENICIAN",tag:558},
    { title:"RANK HOTEL",tag:559},
    { title:"SWISSOTEL",tag:560},
    { title:"Fines",tag:5827},
    { title:"Bail Bonds",tag:5828},
    { title:"Tax Payments",tag:5829},
    { title:"Fire Departments",tag:5851},
    { title:"Government Services - Not Elsewhere Classified",tag:5852},
    { title:"Libraries",tag:5853},
    { title:"Police Departments",tag:5854},
    { title:"Postal Services - Government Only",tag:5855},
    { title:"U.S. Federal Government Agencies or Deparments",tag:5856},
    { title:"GO FLY,LTD.",tag:5901},
    { title:"ACCENT RENT-A-CAR",tag:5902},
    { title:"ROSEN HOTELS AND RESORTS",tag:5903},
    { title:"TOWN & COUNTRY RESORT",tag:5904},
    { title:"GOVERNMENT TO GOVERNMENT",tag:5908},
    { title:"Adoption Agencies - for profit",tag:5910},
    { title:"Credit Restoration",tag:5912},
    { title:"Fulfillment Houses",tag:5913},
    { title:"Modeling Agencies/schools",tag:5915},
    { title:"Third Party payment service providers",tag:5916},
    { title:"Check Cashing Institutions - non-financial",tag:5917},
    { title:"Flea Markets",tag:5921},
    { title:"AEROCONTINENTE",tag:5923},
    { title:"JETBLUE",tag:5924},
    { title:"AIRTRANAIR",tag:5925},
    { title:"ASC AIRLINE",tag:5926},
    { title:"WIDEROES",tag:5927},
    { title:"FIRST HOSPITALITY HOTELS",tag:5928},
    { title:"OUTRIGGER HOTELS AND RESORTS",tag:5929},
    { title:"OHANA HOTELS OF HAWAII",tag:5930},
    { title:"CARIBEROYAL",tag:5931},
    { title:"ALAMOANA",tag:5932},
    { title:"SMUGGLERSNOTCH",tag:5933},
    { title:"RAFFLES",tag:5934},
    { title:"REAL ESTATE-AGNTS/MGRS-RENTALS",tag:5937},
    { title:"RADIO SERVICES",tag:5940},
    { title:"Oman Aviation Services",tag:5941},
    { title:"Virgin Express",tag:5942},
    { title:"Norwegian Air Shuttle",tag:5943},
    { title:"Guest Speakers & Lecturers",tag:5813},
    { title:"Long Distance Trucking Services",tag:757},
    { title:"Motor Freight Carriers",tag:758},
    { title:"Moving, Storage Companies",tag:759},
    { title:"Couriers Services - Air & Ground",tag:762},
    { title:"Freight Forwarders",tag:763},
    { title:"Warehousing - Refridgerator",tag:767},
    { title:"Ships - Cruise Lines",tag:768},
    { title:"Jet Ski - Rental/Leasing",tag:781},
    { title:"Powerboats-Rental/Leasing",tag:782},
    { title:"Sailboats-Rental/Leasing",tag:783},
    { title:"Non-Crew And Yacht-Rental/Leasing",tag:784},
    { title:"Marina Services",tag:792},
    { title:"Yacht Harbors",tag:793},
    { title:"Unclassified Airlines & Air Carriers",tag:794},
    { title:"Flying Fields",tag:798},
    { title:"Bus Tours",tag:819},
    { title:"Package Tour Operators",tag:820},
    { title:"Tour Operators",tag:821},
    { title:"Travel Wholesalers",tag:823},
    { title:"Germany - Package Tour Operators",tag:824},
    { title:"Toll Bridge Fees",tag:827},
    { title:"Toll Road Fees",tag:828},
    { title:"Airport Shuttle Transportation",tag:831},
    { title:"Pagers & Paging Equipment",tag:840},
    { title:"Telecommunication Equipment",tag:841},
    { title:"Cellular Telephone Airtime & Services",tag:862},
    { title:"Faxing Services",tag:863},
    { title:"Local Telephone Services",tag:864},
    { title:"Pre-Paid telephone cards",tag:866},
    { title:"Website Hosting Services",tag:867},
    { title:"Computer Network Information Services",tag:870},
    { title:"Electronic Bulletin Board Access",tag:871},
    { title:"Telegraph & Cablegrams",tag:872},
    { title:"MONEY TRANSFER",tag:873},
    { title:"Cable Television Services",tag:876},
    { title:"Television Services",tag:877},
    { title:"Electricity Providers",tag:908},
    { title:"Garbage Collections",tag:909},
    { title:"Gas Utility Providers",tag:910},
    { title:"Public Utility Providers",tag:911},
    { title:"Water Utility Providers",tag:913},
    { title:"Automotive Parts-Wholesale - New",tag:916},
    { title:"Motor Vehicle Parts - Wholesale -New Parts",tag:917},
    { title:"Furniture - Commercial",tag:920},
    { title:"Office Furniture Suppliers",tag:921},
    { title:"Wholesale Construction Materials-Not Elsewhere Classified",tag:922},
    { title:"Photocopy Supplies & Equipment",tag:937},
    { title:"Photographic Equipment Sales",tag:938},
    { title:"Computer & Computer Peripheral Sales",tag:945},
    { title:"Computer Hardware Sales",tag:946},
    { title:"Computer Software Sales",tag:947},
    { title:"Appliance Wholesaler",tag:960},
    { title:"Commercial Cooking & Food Service Equipment",tag:961},
    { title:"Restaurant Equipment Sales",tag:963},
    { title:"Dental Equipment Sales",tag:1006},
    { title:"Hospital Equipment Sales",tag:1007},
    { title:"Laboratory Equipment Sales",tag:1008},
    { title:"Orthopedic Equipment Sales",tag:1009},
    { title:"Patient Monitoring Equipment Sales",tag:1010},
    { title:"Safety Equipment Sales",tag:1011},
    { title:"Surgical Equipment Sales",tag:1012},
    { title:"Metal Services Centers",tag:1019},
    { title:"Metals Sales Offices",tag:1020},
    { title:"Wholesale Marketers of semi-finished metal products",tag:1021},
    { title:"Wholesale Cutlery Suppliers",tag:1025},
    { title:"Wholesale General Hardware Suppliers",tag:1026},
    { title:"Wholesale Heating Equipment Suppliers",tag:1033},
    { title:"Wholesale Plumbing Equipment Suppliers",tag:1034},
    { title:"Wholesale Water Conditioners, Softeners & Purification",tag:1035},
    { title:"Industrial Supplies - Not Elsewhere Classified",tag:1036},
    { title:"Gemstone Wholesalers",tag:1043},
    { title:"Precious Stones Wholesalers",tag:1045},
    { title:"Wholesale Durable Goods - Not Elsewhere Classified",tag:1136},
    { title:"Wholesale Fire Extinguishers Sales",tag:1137},
    { title:"Wholesale Firearms & Ammunition",tag:1138},
    { title:"Wholesale Gas Lighting Fixtures",tag:1139},
    { title:"Wholesale Luggage Sales (business to business)",tag:1141},
    { title:"Wholesale Monuments Sales",tag:1142},
    { title:"Wholesale Musical Instruments",tag:1143},
    { title:"Wholesale Rough Timber Products",tag:1144},
    { title:"Wholesale Sign Manufacturers",tag:1145},
    { title:"Printing and Writing Paper",tag:1153},
    { title:"Stationery Supplies",tag:1154},
    { title:"Wholesale Cosmetic Distributors",tag:1175},
    { title:"Wholesale Drug Paraphernalia merchants",tag:1176},
    { title:"Wholesale Perfume Distributors",tag:1177},
    { title:"Wholesale Pharmaceutical Supplies",tag:1178},
    { title:"Wholesale Fabric Goods",tag:1200},
    { title:"Wholesale Hair Accessories",tag:1201},
    { title:"Wholesale Notions",tag:1202},
    { title:"Wholesale Sewing Accessories",tag:1203},
    { title:"Wholesale Textile Supplies",tag:1204},
    { title:"Wholesale Professional Uniforms",tag:1218},
    { title:"Wholesale Uniforms - Childrens",tag:1219},
    { title:"Wholesale Uniforms-Men & Women",tag:1220},
    { title:"Footwear - Commercial",tag:1221},
    { title:"Chemical & Allied Products - Not Elsewhere Classified",tag:1224},
    { title:"Detergents",tag:1225},
    { title:"Fuel Products and Services Wholesale",tag:1226},
    { title:"Wholesale Magazines",tag:1240},
    { title:"Wholesale Newspapers & Newspaper Agencies",tag:1241},
    { title:"Wholesale Periodicals",tag:1242},
    { title:"Wholesale Gardening Supplies",tag:1249},
    { title:"Wholesale Nursery Stock",tag:1250},
    { title:"Wholesale Paint Distributors",tag:1258},
    { title:"Wholesale Painting Supplies",tag:1259},
    { title:"Wholesale Varnish Distributors",tag:1260},
    { title:"Art Goods",tag:1291},
    { title:"Clothes Hangers",tag:1293},
    { title:"Food Products",tag:1294},
    { title:"Non-Durable Goods-Not Elsewhere Classified",tag:1295},
    { title:"Home Supply Warehouse Stores",tag:1297},
    { title:"Building Materials",tag:1310},
    { title:"Construction Materials",tag:1311},
    { title:"Lumber",tag:1312},
    { title:"Roofing Materials",tag:1313},
    { title:"Glass & Glass Supplies",tag:1326},
    { title:"Painting & Painting Supplies",tag:1327},
    { title:"Wallpaper Supplies",tag:1329},
    { title:"Electrical Supplies",tag:1360},
    { title:"Hand Tools",tag:1361},
    { title:"Hardware Stores",tag:1362},
    { title:"Lighting Fixtures Supplies",tag:1363},
    { title:"Power Tools",tag:1365},
    { title:"Gardening Supplies",tag:1386},
    { title:"Greenhouses",tag:1387},
    { title:"Lawn Supplies",tag:1388},
    { title:"Plant Shops",tag:1390},
    { title:"Mobile Home Dealers",tag:1391},
    { title:"Wholesale Clubs",tag:1392},
    { title:"Duty Free Stores",tag:1393},
    { title:"Best",tag:1815},
    { title:"Big Lots",tag:1816},
    { title:"Discount Stores",tag:1818},
    { title:"Half Price Stores",tag:1819},
    { title:"Hill's Department Store",tag:1820},
    { title:"Kmart",tag:1822},
    { title:"K's Merchandise",tag:1823},
    { title:"Pic N Save",tag:1824},
    { title:"Roses Stores",tag:1825},
    { title:"Service Merchandise",tag:1826},
    { title:"Shopko",tag:1827},
    { title:"Solo Serv",tag:1828},
    { title:"Sprouse Reitz",tag:1829},
    { title:"Stein Mart",tag:1830},
    { title:"Target",tag:1831},
    { title:"Value City",tag:1832},
    { title:"Venture Store",tag:1833},
    { title:"Wal-Mart",tag:1834},
    { title:"Belk",tag:2591},
    { title:"Bloomingdales",tag:2592},
    { title:"Broadway",tag:2593},
    { title:"Bullocks",tag:2594},
    { title:"Burdines",tag:2595},
    { title:"Carson Pirie Scott",tag:2596},
    { title:"Daytons",tag:2597},
    { title:"Department Stores",tag:2598},
    { title:"Dillards",tag:2599},
    { title:"Emporium Capwell",tag:2600},
    { title:"Filenes",tag:2601},
    { title:"Foley's",tag:2602},
    { title:"Hechts",tag:2603},
    { title:"Hudsons",tag:2604},
    { title:"Jacobsons",tag:2605},
    { title:"JC Penney",tag:2606},
    { title:"Kohl's",tag:2607},
    { title:"Lazarus",tag:2608},
    { title:"Macy's",tag:2609},
    { title:"Marshall Fields",tag:2610},
    { title:"May Company",tag:2611},
    { title:"Mervyns",tag:2612},
    { title:"Montgomery Ward",tag:2613},
    { title:"Nordstroms",tag:2614},
    { title:"Strawbridge & Clothier",tag:2615},
    { title:"The Bon Marche",tag:2616},
    { title:"The Bon Ton",tag:2617},
    { title:"Woodward & Lothrop",tag:2618},
    { title:"Caldor",tag:2625},
    { title:"Variety Stores",tag:2626},
    { title:"Woolworth's",tag:2627},
    { title:"Best Buy",tag:2739},
    { title:"Bi Mart",tag:2740},
    { title:"Clover",tag:2741},
    { title:"Consumers Distributing",tag:2742},
    { title:"Cost Plus Imports",tag:2743},
    { title:"Misc. General Merchandise Sales",tag:2744},
    { title:"AAFEES",tag:2745},
    { title:"Navy Exchange",tag:2746},
    { title:"Pier 1 Imports",tag:2747},
    { title:"Whole Earth",tag:2748},
    { title:"Grocery Stores",tag:2751},
    { title:"Supermarkets",tag:2752},
    { title:"Butcher Shops",tag:2795},
    { title:"Freezer and Locker Meat Provisioners",tag:2797},
    { title:"Seafood and Frozen Meat",tag:2798},
    { title:"Meat Locker ",tag:2799},
    { title:"Meat Market",tag:2800},
    { title:"Seafood Market",tag:2801},
    { title:"Candy, Nut and Confectionery Stores",tag:2832},
    { title:"Chocolate Shops",tag:2833},
    { title:"Confectionery Shops",tag:2834},
    { title:"Dried Fruit Shops",tag:2835},
    { title:"Nut Shops",tag:2836},
    { title:"Popcorn Stands",tag:2837},
    { title:"Cheese Shops",tag:2840},
    { title:"Dariy Product Stores",tag:2841},
    { title:"Bagel Shops",tag:2884},
    { title:"Bakeries",tag:2885},
    { title:"Cookie Stores",tag:2886},
    { title:"Doughnut Shops",tag:2887},
    { title:"Pastry Shops",tag:2888},
    { title:"Pie Shops",tag:2889},
    { title:"Wedding Cakes",tag:2890},
    { title:"Coffee Shops",tag:3101},
    { title:"Convenience Stores",tag:3102},
    { title:"Delicatessens",tag:3103},
    { title:"Fruit Markets",tag:3104},
    { title:"Gourmet Food Stores",tag:3105},
    { title:"Health Food Stores",tag:3106},
    { title:"Ice Cream Shops",tag:3107},
    { title:"Miscellaneous Food Stores",tag:3108},
    { title:"Pretzel Stands",tag:3109},
    { title:"Produce Markets",tag:3110},
    { title:"Specialty Food Markets",tag:3111},
    { title:"Tea Stores",tag:3112},
    { title:"Vegatable Markets",tag:3113},
    { title:"Vitamin Stores",tag:3114},
    { title:"Yogurt Shops",tag:3115},
    { title:"Automobile & Truck Leasing",tag:3122},
    { title:"Car & Truck Dealers (New and Used) Sales, Service, Repair, Parts and Leasing",tag:3123},
    { title:"Motor Vehicle Dealers (New & Used)",tag:3124},
    { title:"Antique Autmobiles",tag:3127},
    { title:"Used Car Dealers (Used Only)",tag:3128},
    { title:"Automotive Tire Stores",tag:3129},
    { title:"Automobile Accessories",tag:3132},
    { title:"Automobile Parts",tag:3133},
    { title:"Gas Stations",tag:3146},
    { title:"Marina Service Stations",tag:3147},
    { title:"Service Stations (with or without ancillary services)",tag:3148},
    { title:"Truck Stops",tag:3149},
    { title:"Boat Dealers",tag:3154},
    { title:"Camper, Recreation and Utility Trailer Dealers",tag:3155},
    { title:"Motorcycle shops and dealers",tag:3156},
    { title:"Motor Home Dealers",tag:3157},
    { title:"Snowmobile Dealers",tag:3158},
    { title:"Airplane, Aircraft Dealers",tag:3171},
    { title:"All-Terrain Vehicle Dealers",tag:3172},
    { title:"Golf Cart Dealers",tag:3173},
    { title:"Misc Automotive, Aircraft, and Farm Equipment Dealers Not Elsewhere Classified",tag:3174},
    { title:"Men's and Boy's Clothing & Accessories",tag:3181},
    { title:"Men's Hat Shops",tag:3182},
    { title:"Men's Tie Shops",tag:3183},
    { title:"Bridal Shops",tag:3204},
    { title:"Dress Shops",tag:3205},
    { title:"Maternity Stores",tag:3206},
    { title:"Women's Coat Stores",tag:3207},
    { title:"Women's Ready-to-Wear Stores",tag:3208},
    { title:"BRAATHENS REGIONAL AIRLINES",tag:3213},
    { title:"Costume Jewelry",tag:3229},
    { title:"Handbag Stores",tag:3230},
    { title:"Lingerie Stores",tag:3231},
    { title:"Women's Clothing Accessories",tag:3232},
    { title:"Women's Hat Shops",tag:3233},
    { title:"Children & Infant Clothes",tag:3234},
    { title:"Family Clothing Stores",tag:3235},
    { title:"AIR ARABIA AIRLINE",tag:3236},
    { title:"Athletic Apparel Stores",tag:3242},
    { title:"Equestrian Apparel",tag:3243},
    { title:"Sports and Riding Apparel Stores",tag:3244},
    { title:"Athletic Shoe Stores",tag:3257},
    { title:"Footwear Stores",tag:3258},
    { title:"Shoe Stores",tag:3259},
    { title:"Western Boot Shops",tag:3260},
    { title:"Furriers and Fur Shops",tag:3261},
    { title:"Men's and Women's Clothing Stores",tag:3262},
    { title:"Custom Made Clothing",tag:3283},
    { title:"Dressmakers",tag:3284},
    { title:"Made-To-Order Clothing",tag:3285},
    { title:"Sewing Shops",tag:3286},
    { title:"Tailors, Seemstresses, Mending and Alterations",tag:3287},
    { title:"Wig and Toupee Stores",tag:3288},
    { title:"Clothing - Formal Wear",tag:3301},
    { title:"Miscellaneous Apparel and Accessory Shops-Not Elsewhere Classified",tag:3302},
    { title:"T-Shirt Shop",tag:3304},
    { title:"Furniture, Home Furnishing & Equipment Stores (Except Appliances)",tag:3325},
    { title:"Made-To-Order Furniture",tag:3326},
    { title:"Mattress Stores",tag:3327},
    { title:"Oriental Rug Sales",tag:3328},
    { title:"Floor Covering Stores",tag:3330},
    { title:"Curtain Stores",tag:3337},
    { title:"Upholstery Materials Stores",tag:3338},
    { title:"Windowcovering Stores",tag:3339},
    { title:"Market Research Firms",tag:5814},
    { title:"Public Speakers",tag:5816},
    { title:"Research Firms",tag:5817},
    { title:"Alimony Payments",tag:5824},
    { title:"Child Support Payments",tag:5825},
    { title:"Court Fees",tag:5826},
    { title:"Grand Wailea Resort",tag:5961},
    { title:"La Quinta Resort",tag:5962},
    { title:"Frankenmuth Bavarian",tag:5963},
    { title:"Ferries - Commuter Transportation",tag:710},
    { title:"Limo Single Vehicle",tag:731},
    { title:"Royal Lahaina Resort",tag:5944},
    { title:"Stamp and Coin Stores",tag:3788},
    { title:"Religious Goods Stores",tag:3790},
    { title:"Hearing Aid-Sales, Service and Supplies",tag:3791},
    { title:"Orthopedic Goods - Prosthetic Devices",tag:3792},
    { title:"Cosmetic Stores",tag:3793},
    { title:"Typewriter Stores - Sales, Rental & Service",tag:3794},
    { title:"Florists",tag:3796},
    { title:"Retail Cigarette, Cigar, Pipe and Tobacco Stores",tag:3797},
    { title:"News Dealers and Newsstands",tag:3798},
    { title:"Pet Food",tag:3805},
    { title:"Pet Shops",tag:3806},
    { title:"Pet Supplies",tag:3807},
    { title:"Hot Tub/Whirlpool Sales & Service",tag:3810},
    { title:"Swimming Pools Sales & Service",tag:3811},
    { title:"Electric Razor Stores-Sales & Service",tag:3812},
    { title:"Tent & Awning Shops",tag:3813},
    { title:"Ammunition Stores",tag:4054},
    { title:"Beauty Supply Stores",tag:4055},
    { title:"Bottled & Distilled Water Dealers",tag:4056},
    { title:"Firearm Sales",tag:4058},
    { title:"Fireworks Sales",tag:4059},
    { title:"Gravestones & Monuments Sales",tag:4060},
    { title:"Ice Dealers",tag:4061},
    { title:"Magic Shops",tag:4062},
    { title:"Map & Atlas Stores",tag:4063},
    { title:"Miscellaneous & Specialty Retail Shops",tag:4064},
    { title:"Picture Framing Shops",tag:4066},
    { title:"Sport Card Collectibles",tag:4067},
    { title:"Sunglasses Stores",tag:4068},
    { title:"Trophy Stores",tag:4069},
    { title:"Financial Institutions-Manual Cash Disbursements",tag:4070},
    { title:"Currency Exchanges-Non Financial Institutions",tag:4073},
    { title:"Commodity Dealers",tag:4080},
    { title:"Security Brokers/Dealers",tag:4082},
    { title:"Renter and Homeowners Insurance Sales",tag:4096},
    { title:"Peppermill Hotel Casino",tag:5945},
    { title:"Hale Koa Hotel",tag:5948},
    { title:"WESTJET AIRLINES",tag:5949},
    { title:"CLARIDGE CASINO HOTEL",tag:5950},
    { title:"THE FLAMINGO HOTELS",tag:5951},
    { title:"GRAND CASINO HOTELS",tag:5952},
    { title:"MERCHANTS RENT-A-CAR",tag:5954},
    { title:"Manhatten East Suite Hotels",tag:5959},
    { title:"Life Insurance Sales",tag:4097},
    { title:"Personal & Business Insurance Sales",tag:4098},
    { title:"Bed & Breaksfast Establishments",tag:4105},
    { title:"Central Reservations Service",tag:4106},
    { title:"Time Share",tag:4108},
    { title:"Sporting & Recreational Camps",tag:4109},
    { title:"Trailer Parks & Campgrounds",tag:4110},
    { title:"Diaper Services",tag:4113},
    { title:"Laundry, Cleaning & Garmet Services",tag:4114},
    { title:"Laundries-Family & Commercial",tag:4117},
    { title:"Laundromats",tag:4118},
    { title:"Dry Cleaners",tag:4119},
    { title:"Photographic Studios",tag:4127},
    { title:"Portrait Studios",tag:4128},
    { title:"Wedding Photographers",tag:4129},
    { title:"Barber & Beauty Shops",tag:4160},
    { title:"Hair and Beauty Salons",tag:4161},
    { title:"Hair Cutting",tag:4162},
    { title:"Nail Salon",tag:4165},
    { title:"Hat Cleaning Shops",tag:4172},
    { title:"Shoe Repair Shops",tag:4173},
    { title:"Shoe Shine Parlors",tag:4174},
    { title:"Funeral Service & Crematories",tag:4181},
    { title:"Undertakers",tag:4183},
    { title:"DATING SERVICES",tag:4186},
    { title:"DATING SERVICES",tag:4187},
    { title:"Tax Preparation Services",tag:4188},
    { title:"Counseling Centers (non-licensed)",tag:4191},
    { title:"Counseling Centers-Licensed",tag:4192},
    { title:"Clothing Rental-Costume, Uniforms & Formal Wear",tag:4206},
    { title:"Costume Rental",tag:4207},
    { title:"Formal Wear Rental",tag:4208},
    { title:"Uniform Rental",tag:4209},
    { title:"Licensed Massage Parlors",tag:4212},
    { title:"Massage Parlors",tag:4213},
    { title:"Health Clubs",tag:4220},
    { title:"Personal & Therapeutic Services",tag:4221},
    { title:"Animal Boarding Services",tag:4355},
    { title:"Animal Breeding",tag:4356},
    { title:"Animal Grooming Services",tag:4357},
    { title:"Animal Kennels",tag:4358},
    { title:"Apartment Rental Services",tag:4360},
    { title:"Body Piercing, Tattoo Parlors",tag:4361},
    { title:"Credit Card Protection Services",tag:4362},
    { title:"Miscellaneous Personal Services - Not elsewhere classified",tag:4363},
    { title:"Taxidermists",tag:4365},
    { title:"Wedding Chapels",tag:4366},
    { title:"Advertising Services",tag:4367},
    { title:"Consumer Credit Reporting Agencies",tag:4368},
    { title:"Commercial Photography, Art & Graphics",tag:4375},
    { title:"Film Productions",tag:4376},
    { title:"Silk Screening",tag:4377},
    { title:"Quick Copy, Reproduction & Blueprinting Services",tag:4378},
    { title:"Stenographic & Secretarial Support",tag:4381},
    { title:"Exterminating & Disinfecting Services",tag:4383},
    { title:"Cleaning, Maintenance & Janitorial Services",tag:4396},
    { title:"Custodial Services",tag:4397},
    { title:"House Cleaning Services",tag:4398},
    { title:"Maintenance Services",tag:4399},
    { title:"Employment Agencies & Temporary Help Services",tag:4400},
    { title:"Computer Software Design",tag:4414},
    { title:"Data Processing Services",tag:4415},
    { title:"Integrated Computer Systems Design",tag:4416},
    { title:"Information Retrieval Services",tag:4417},
    { title:"Computer Maintenance & Repair",tag:4418},
    { title:"Consultants-Marketing",tag:4426},
    { title:"Consultants-Public Relations",tag:4427},
    { title:"Armored Car Services",tag:4484},
    { title:"Detective Agencies",tag:4485},
    { title:"Fire Alarm Companies",tag:4486},
    { title:"Guard Dogs",tag:4487},
    { title:"Personal Protection Services",tag:4489},
    { title:"Private Investigators",tag:4490},
    { title:"Security System Agencies",tag:4491},
    { title:"Equipment, Tool, Furniture & Appliance Rental & Leasing",tag:4492},
    { title:"Film Developing",tag:4495},
    { title:"Business Services - Not Elsewhere Classified",tag:4707},
    { title:"Collection Agencies",tag:4708},
    { title:"Conference Management Services",tag:4709},
    { title:"Investment Clubs",tag:4710},
    { title:"Investor Services",tag:4711},
    { title:"Language Translation Services",tag:4712},
    { title:"Locksmith",tag:4713},
    { title:"Mail Packaging Services",tag:4714},
    { title:"Message / Paging Services",tag:4715},
    { title:"Resume Writing Services",tag:4717},
    { title:"Seminar Marketers",tag:4718},
    { title:"Telephone Answering Services",tag:4719},
    { title:"Tourist Information Bureaus",tag:4720},
    { title:"Trade Show Arrangement Services",tag:4721},
    { title:"Truck & Utility Trailer Rentals",tag:4723},
    { title:"Motor Home & Recreational Vehicle Rentals",tag:4724},
    { title:"Parking Lots & Garages",tag:4725},
    { title:"Automotive Body Repair Shops",tag:4726},
    { title:"Tire Retreading & Repair Shops",tag:4727},
    { title:"Automotive Paint Shops",tag:4728},
    { title:"Automotive Glass Repair",tag:4749},
    { title:"Lube Stations - Quick Stop",tag:4751},
    { title:"Muffler Shops",tag:4752},
    { title:"Wheel Alignment, Balancing & Repair Services",tag:4753},
    { title:"Car Washes",tag:4754},
    { title:"Automobile Towing Services",tag:4755},
    { title:"Electronic Repair Shops",tag:4756},
    { title:"Air Conditioning & Refrigerations Repair Shops",tag:4757},
    { title:"Electrical & Small Appliance Repair Shops",tag:4758},
    { title:"Watch, Clock & Jewelry Repair",tag:4759},
    { title:"Welding Services",tag:4761},
    { title:"Chimney Cleaning Services",tag:4774},
    { title:"Furnace Cleaning Services",tag:4775},
    { title:"Machine Shops",tag:4776},
    { title:"Miscellaneos Repair Shops & Related Services",tag:4777},
    { title:"Motion Picture & Video Tape Production & Distribution",tag:4778},
    { title:"Motion Picture Theaters",tag:4779},
    { title:"DVD/Video Tape Rental Stores",tag:4780},
    { title:"Ballet School",tag:4787},
    { title:"Ballroom Dance Instruction",tag:4788},
    { title:"Advanced ticket sales",tag:4792},
    { title:"Theatrical Producers & Ticket Agents",tag:4793},
    { title:"Bands, Orchestras & Miscellaneous Entertainers - Not Elsewhere Classified",tag:4800},
    { title:"Magicians",tag:4801},
    { title:"Musicians & Orchestras",tag:4802},
    { title:"Billiard & Pool Establishments",tag:4803},
    { title:"Bowling Alleys",tag:4804},
    { title:"Professional Sports Clubs",tag:4818},
    { title:"Sports Arenas",tag:4819},
    { title:"Stadiums",tag:4820},
    { title:"Arboretums",tag:4851},
    { title:"Botanical Garden",tag:4852},
    { title:"Exhibits & Expositions",tag:4853},
    { title:"Museums",tag:4854},
    { title:"Tourist Attractions & Exhibits",tag:4855},
    { title:"Wineries",tag:4856},
    { title:"Public Golf Courses",tag:4857},
    { title:"Video Amusement Game Supplies",tag:4858},
    { title:"Video Game Arcades",tag:4859},
    { title:"Gambling Establishments",tag:4872},
    { title:"Gaming Chip Makers",tag:4873},
    { title:"Lotteries & Lottery Ticket Sales",tag:4874},
    { title:"Off-Track Betting",tag:4875},
    { title:"Amusement Parks",tag:4896},
    { title:"Carnivals",tag:4897},
    { title:"Circuses ",tag:4898},
    { title:"Fortune Tellers",tag:4899},
    { title:"State & County Fairs",tag:4900},
    { title:"Athletic/Fitness Clubs",tag:4943},
    { title:"Boating & Yachting Clubs",tag:4944},
    { title:"Bowling Leagues",tag:4945},
    { title:"Country Clubs & Private Golf Clubs",tag:4946},
    { title:"Membership Organizations",tag:4947},
    { title:"Shooting & Gun Clubs",tag:4948},
    { title:"YMCA/YWC",tag:4949},
    { title:"Aquariums, Seaquariums & Dolphinariums",tag:4952},
    { title:"Zoos",tag:4953},
    { title:"Aircraft Rental",tag:5136},
    { title:"Ballooning ",tag:5137},
    { title:"Batting Cages",tag:5138},
    { title:"Bicycle Rentals",tag:5139},
    { title:"Fishing & Hunting Licenses",tag:5140},
    { title:"Golf Driving Ranges",tag:5141},
    { title:"Horseback Riding",tag:5142},
    { title:"Miniature Golf",tag:5143},
    { title:"Parachuting",tag:5144},
    { title:"Public Swimming Pools",tag:5145},
    { title:"Recreationg Services - Not Elsewhere Classified",tag:5146},
    { title:"Roller Skating Rinks",tag:5147},
    { title:"Ski Slopes",tag:5148},
    { title:"Sky Diving",tag:5149},
    { title:"Cosmetic Surgeons",tag:5192},
    { title:"Dermatologists",tag:5193},
    { title:"Doctors - Not Elsewhere Classified",tag:5194},
    { title:"Orthopedists",tag:5195},
    { title:"Ostetricians",tag:5196},
    { title:"Pediatricians",tag:5197},
    { title:"Plastic Surgeons",tag:5198},
    { title:"Dentist & Orthodontists",tag:5199},
    { title:"Osteopaths",tag:5200},
    { title:"Chiropractors",tag:5201},
    { title:"Optometrists & Ophthalmologists",tag:5202},
    { title:"Opticians, Optical Goods & Eyeglasses",tag:5203},
    { title:"Podiatrists & Chiropodists",tag:5204},
    { title:"Convalescent Homes",tag:5225},
    { title:"Hospice Facilities",tag:5226},
    { title:"Nursing & Personal Care Facilities",tag:5227},
    { title:"Nursing Homes",tag:5228},
    { title:"Rest Homes & Eldercard",tag:5229},
    { title:"Hospitals",tag:5230},
    { title:"Medical & Dental Laboratories",tag:5231},
    { title:"Blood Banks",tag:5342},
    { title:"Chemical Dependency Treatment Centers",tag:5343},
    { title:"Fertility Clinics",tag:5344},
    { title:"Hair Replacement Centers",tag:5345},
    { title:"Hearing Testing Services",tag:5346},
    { title:"Medical Services & Health Practitioners - Not Elsewhere Classified",tag:5347},
    { title:"Mental Health Practitioners",tag:5348},
    { title:"Physical Therapists",tag:5349},
    { title:"Psychiatrists",tag:5350},
    { title:"Psychologists",tag:5351},
    { title:"Sports Medicine Clinics",tag:5352},
    { title:"Bankruptcy Lawyers",tag:5359},
    { title:"Law Offices",tag:5360},
    { title:"Legal Services & Attorneys",tag:5361},
    { title:"Elementary & Secondary Schools",tag:5382},
    { title:"Grade School",tag:5383},
    { title:"Grammar School",tag:5384},
    { title:"High School",tag:5385},
    { title:"Middle School",tag:5386},
    { title:"Colleges, Universities, Professional Schools & Junior Colleges",tag:5417},
    { title:"Community Colleges",tag:5418},
    { title:"Graduate School",tag:5419},
    { title:"Junior College",tag:5420},
    { title:"Professional Schools",tag:5421},
    { title:"Universities",tag:5422},
    { title:"Correspondence Schools",tag:5423},
    { title:"Business Schools",tag:5430},
    { title:"Computer Training Schools",tag:5431},
    { title:"Secretarials Schools",tag:5432},
    { title:"Technical Institutes",tag:5439},
    { title:"Trade School",tag:5440},
    { title:"Vocational Schools",tag:5441},
    { title:"Art Schools",tag:5532},
    { title:"Automobile Driving Instruction",tag:5533},
    { title:"Aviation Instruction",tag:5534},
    { title:"Cooking School",tag:5535},
    { title:"Culinary Instructions",tag:5536},
    { title:"Job Training Services",tag:5537},
    { title:"Karate School",tag:5538},
    { title:"Modeling Agencies",tag:5539},
    { title:"Modeling School",tag:5540},
    { title:"Schools & Educational Services - Not Elsewhere Classified",tag:5541},
    { title:"Babysitting Services",tag:5562},
    { title:"Child Care Services",tag:5563},
    { title:"Nannies",tag:5564},
    { title:"Nursery School",tag:5565},
    { title:"PreSchool Centers",tag:5566},
    { title:"Charitable & Social Service Organization",tag:5573},
    { title:"Fund Raising Organizations - Non-Political",tag:5574},
    { title:"Public Radio & Television",tag:5575},
    { title:"Alumni/Alumnae Associations",tag:5618},
    { title:"Chamber of Commerce",tag:5619},
    { title:"Civic, Social & Fraternal Associations",tag:5620},
    { title:"Fraternal Associations",tag:5621},
    { title:"Police Athletic League (PAL)",tag:5622},
    { title:"Political Fund Raising",tag:5623},
    { title:"Veterans' Organizations",tag:5624},
    { title:"Political Organizations",tag:5625},
    { title:"Religious Organizations",tag:5626},
    { title:"Autombile Associations",tag:5627},
    { title:"Historical Clubs",tag:5640},
    { title:"Labor Unions",tag:5641},
    { title:"Membership Organizations - Not Elsewhere Classified",tag:5642},
    { title:"Professional Organizations - Not Elsewhere Classified",tag:5643},
    { title:"Food Testing Services",tag:5674},
    { title:"Forensic Laboratories",tag:5675},
    { title:"Pollution Testing",tag:5676},
    { title:"Product Testing Laboratories",tag:5677},
    { title:"Testing Laboratories - Non-Medical Testing",tag:5678},
    { title:"Veterinary Testing Laboratories",tag:5679},
    { title:"Architectural, Engineering & Surveying Services",tag:5680},
    { title:"Accounting, Auditing & Bookkeeping Services",tag:5693},
    { title:"Auditing Services",tag:5694},
    { title:"Bookkeeping Services",tag:5695},
    { title:"Income Tax & Accounting Services",tag:5696},
    { title:"Auction Houses",tag:5807},
    { title:"Court Stenographer",tag:5808},
    { title:"Debt Refinancers (excluding mortgage)",tag:5809},
    { title:"Debt Refinancers-Mortgage",tag:5810},
    { title:"Financial Planners",tag:5811},
    { title:"Graphic Designers",tag:5812},
    { title:"VLM AIRLINES",tag:5983},
    { title:"Safes and Vaults",tag:5984},
    { title:"Office Equipment",tag:5985},
    { title:"Jetstar Airways",tag:5986},
    { title:"AUTOMATED REFERRAL SERVICE",tag:6431},
    { title:"FI-AUTOMATED CASH DISBURSEMENTS",tag:6430},
    { title:"Tradewinds Resorts",tag:5989},
    { title:"Home Heating Oil",tag:5990},
    { title:"Brokers Other",tag:5991},
    { title:"Other Professional Services",tag:5992},
    { title:"Face to face gambling horse racing lotteries",tag:7017},
    { title:"Taxi Single Vehicle",tag:6382},
    { title:"Video Stores",tag:5995},
    { title:"Adult Video Stores",tag:5996},
    { title:"AGENCIES-TICKET, THEATRICAL PRODUCERS",tag:5997},
    { title:"PERFORMING ARTS COMPANIES-THEATRICAL",tag:5998},
    { title:"PRODUCERS-THEATRICAL",tag:5999},
    { title:"PRODUCTION AGENCIES-THEATRICAL",tag:6000},
    { title:"TICKET AGENCIES",tag:6001},
    { title:"EUROFLY",tag:6002},
    { title:"CANDLEWOOD SUITES",tag:6003},
    { title:"AUTO AND HOME SUPPLY STORES",tag:6004},
    { title:"Non face to face gambling horse racing lotteries",tag:7018},
    { title:"Mail order/telephone order gambling-excludes internet gambling",tag:7016},
    { title:"BREAKERS RESORT",tag:6007},
    { title:"HUDSON HOTEL",tag:6008},
    { title:"HYATT PLACE",tag:6427},
    { title:"HILTON GARDEN INN",tag:6010},
    { title:"JURYS DOYLE HOTEL",tag:6011},
    { title:"JEFFERSON HOTEL",tag:6012},
    { title:"FONTAINEBLEAU RESORT",tag:6013},
    { title:"Non Face to Face Pharmacies Network Certification Required",tag:6014},
    { title:"Non Face to Face Pharmacies",tag:6015},
    { title:"Non Face to Face Pharmacies Network Certification Required",tag:6016},
    { title:"Non Face to Face Pharmacies",tag:6017},
    { title:"NON FACE TO FACE TOBACCO PRODUCTS",tag:6018},
    { title:"GAYLORD OPRYLAND",tag:6019},
    { title:"GAYLORD PALMS",tag:6020},
    { title:"GAYLORD TEXAN",tag:6021},
    { title:"Homes to Suites by Hilton",tag:7022},
    { title:"C MON INN",tag:6023},
    { title:"MICROTEL INNS AND SUITES",tag:6024},
    { title:"HERMITAGE HOTEL",tag:6025},
    { title:"DBA AIR",tag:6026},
    { title:"HAPAG-LLOYD EXPRESS AIRLINES",tag:6027},
    { title:"AIR BERLIN",tag:6028},
    { title:"AMERICINN",tag:6029},
    { title:"AMERICAS BEST VALUE INN",tag:6030},
    { title:"GREAT WOLF",tag:6031},
    { title:"ALOFT",tag:6032},
    { title:"EXTENDED STAY",tag:6033},
    { title:"STUDIO PLUS",tag:6034},
    { title:"EXTENDED STAY AMERICA",tag:6035},
    { title:"HOMESTEAD SUITES",tag:6037},
    { title:"Wilderness Hotel & Resort",tag:6038},
    { title:"THE PALACE RESORT",tag:6039},
    { title:"THE WIGWAM GOLF RESORT AND SPA",tag:6040},
    { title:"THE DIPLOMAT COUNTRY CLUB AND SPA",tag:6041},
    { title:"THE ATLANTIC",tag:6042},
    { title:"PRINCEVILLE RESORT",tag:6043},
    { title:"ELEMENT",tag:6044},
    { title:"LXR (Luxury Resorts)",tag:6045},
    { title:"Settle Inn",tag:6046},
    { title:"La Costa Resort",tag:6047},
    { title:"Premier Inn",tag:6048},
    { title:"Sun Country Airlines",tag:7023},
    { title:"Alcohol via internet",tag:6376},
    { title:"Internet Package Alcohol Sales",tag:6377},
    { title:"Internet Liquor Stores",tag:6378},
    { title:"Internet Bottled Beer , Wine and Liquor Sales",tag:6379},
    { title:"Internet Gambling",tag:6380},
    { title:" Quasi Cash",tag:6381},
    { title:"Club Hotels By Doubletree",tag:6383},
    { title:"Mini Markets",tag:6384},
    { title:"Poultry Shops",tag:6385},
    { title:"Accessories-Recreational Vehicles",tag:6386},
    { title:"Moped and Motor Scooter Dealers",tag:6387},
    { title:"Motorcycle, Moped And Motor Scooter Accessories",tag:6388},
    { title:"AIR ASTANA",tag:6426},
    { title:"Hair Pieces and Extensions",tag:6390},
    { title:"Radios, Camcorders and VCRs",tag:6391},
    { title:"Scuba / Skin Diving Shop",tag:6392},
    { title:"Exercise Equipment",tag:6393},
    { title:"Skate/Skateboard Shop",tag:6394},
    { title:"Surfing Equipment Shop",tag:6395},
    { title:"Clock Shop",tag:6396},
    { title:"Silverware/Silversmith Shop",tag:6397},
    { title:"Watch Shop",tag:6398},
    { title:"Subscription Merchant-Direct Marketing",tag:6399},
    { title:"Classified Ads-Newspapers",tag:6400},
    { title:"Numismatic Supplies",tag:6401},
    { title:"Philatelic Supplies",tag:6402},
    { title:"Medical/Dental Insurance",tag:6403},
    { title:"HOTEL INDIGO",tag:6428},
    { title:"Boat Rentals",tag:6405},
    { title:"Marina Supplies",tag:6406},
    { title:"Shuttle Transportation",tag:6407},
    { title:"Transportation Not Elsewhere Classified",tag:6408},
    { title:"Internet Service Providers",tag:6409},
    { title:"Medical Equipment",tag:6410},
    { title:"Xray Equipment",tag:6411},
    { title:"Opthalmic Equipment",tag:6412},
    { title:"Orthodontia Supplies",tag:6413},
    { title:"Communications Equipment",tag:6414},
    { title:"Wholesale Hand Tools",tag:6415},
    { title:"Wholesale Watches",tag:6416},
    { title:"Distributors-drugs,toiletries and druggist sundries",tag:6417},
    { title:"Leather and Cut Stock",tag:6418},
    { title:"Foam and Crude Rubber",tag:6419},
    { title:"Ice",tag:6420},
    { title:"Mobile Home Parts and Equipment",tag:6421},
    { title:"Cake Shops",tag:6422},
    { title:"Window Replacement",tag:6423},
    { title:"Doubletree Hotels",tag:6424},
    { title:"Non-Scheduled Airlines",tag:6425},
    { title:"THE ROOSEVELT HOTEL NY",tag:6429},
    { title:"VDARA (VDARA HOTEL AND SPA)",tag:6473},
    { title:"GCAS EMERGENCY SERVICES",tag:6433},
    { title:"HOMEWOOD SUITES",tag:6434},
    { title:"HALEKULANI HOTEL/WAIKIKI PARC",tag:6435},
    { title:"PRIMADONNA HOTEL AND CASINO",tag:6436},
    { title:"ALADDIN RESORT AND CASINO",tag:6437},
    { title:"CARNIVAL AIR",tag:6438},
    { title:"CEBU PACIFIC",tag:6439},
    { title:"NICKELODEON FAMILY SUITES BY HOLIDAY INN",tag:6440},
    { title:"MAINSTAY SUITES",tag:6441},
    { title:"Title Insurance",tag:6442},
    { title:"SARA HOTELS",tag:582},
    { title:"Electronic Coupon",tag:6477},
    { title:"GRAND SIERRA RESORT",tag:6478},
    { title:"COSMOPOLITAN OF LAS VEGAS",tag:6479},
    { title:"U.S. AIR SHUTTLE",tag:6447},
    { title:"AERVIRGINIS",tag:6448},
    { title:"GODFREY NATL RENT-A-CAR",tag:6449},
    { title:"CITE RENT-A-CAR",tag:6450},
    { title:"ETIHAD AIRWAYS",tag:6443},
    { title:"NON FACE TO FACE GUN SALES",tag:6451},
    { title:"MUZZLELOADERS",tag:6452},
    { title:"DEBT AND FINANCIAL COUNSELING",tag:6453},
    { title:"LOAN MODIFICATIONS",tag:6454},
    { title:"SOFTWARE - CREDIT REPAIR/LOAN MODS",tag:6455},
    { title:"DEBT AND FINANCIAL COUNSELING",tag:6456},
    { title:"LOAN MODIFICATIONS",tag:6457},
    { title:"SOFTWARE - CREDIT REPAIR/LOAN MODS",tag:6458},
    { title:"Saddlebrook Resort Tampa",tag:7024},
    { title:"Digital Goods Media: Books, Movies, Music",tag:7025},
    { title:"CROSSLAND",tag:6470},
    { title:"Gambling: Horse Racing,Lotteries",tag:6471},
    { title:"ARIA (ARIA RESORT AND CASINO)",tag:6472},
    { title:"DEBT AND FINANCIAL COUNSELING",tag:6464},
    { title:"LOAN MODIFICATIONS",tag:6465},
    { title:"SOFTWARE - CREDIT REPAIR/LOAN MODS",tag:6466},
    { title:"OXFORD SUITES",tag:6467},
    { title:"JUMEIRAH ESSEX",tag:6468},
    { title:"CARIBE ROYALE",tag:6469},
    { title:"MOTO Pharmacy",tag:6474},
    { title:"AUTOGRAPH",tag:6475},
    { title:"GALT HOUSE",tag:6476},
    { title:"Digital Goods: Games",tag:7026},
    { title:"Digital Goods: Applications",tag:7027},
    { title:"Large Digital Goods Merchant",tag:7028},
    { title:"Government-Owned Lotteries",tag:7029},
    { title:"Government Licensed Casinos (Online)",tag:7030},
    { title:"Government Licensed Horse/Dog Racing",tag:7031},
    { title:"CURIO HOTELS",tag:7032},
    { title:"CANOPY",tag:7033},
    { title:"Penny Auctions ",tag:6496},
    { title:"Bail and Bond Payments (Fee Only)",tag:7035},
    { title:"Medical Marijuana",tag:6498},
    { title:"Cross Border Currency Exchange",tag:6499},
    { title:"Game Console Circumvention Devices",tag:6500},
    { title:"JET AIR",tag:6501},
    { title:"MONEYSEND FUNDING",tag:6502},
    { title:"Lifetime Memberships for Non-Profit Organizations",tag:5644},
    { title:"Ephedrine",tag:7000},
    { title:"Ephedrine",tag:7001},
    { title:"HCG Weigh Loss",tag:7002},
    { title:"HCG Weigh Loss",tag:7003},
    { title:"Search Engine Optimization",tag:7004},
    { title:"Search Engine Optimization",tag:7005},
    { title:"Search Engine Optimization",tag:7006},
    { title:"Search Engine Optimization",tag:7007},
    { title:"Search Engine Optimization",tag:7008},
    { title:"Search Engine Optimization",tag:7009},
    { title:"VIRGIN AMERICA",tag:7010},
    { title:"NON FACE TO FACE ELECTRONIC CIGARETTES",tag:7011},
    { title:"FACE TO FACE ELECTRONIC CIGARETTES",tag:7012},
    { title:"Telemedicine",tag:7013},
    { title:"Telemedicine",tag:7014},
    { title:"Telemedicine",tag:7015},
    { title:"ANA AI",tag:349},
    { title:"MIDEAST AI",tag:355},
    { title:"LAV AIRLINE",tag:361},
    { title:"INDIAN AI",tag:367},
    { title:"CHINEASTAI",tag:373},
    { title:"TAME AIRLINE",tag:381},
    { title:"SAETA AI",tag:385},
    { title:"AVIATECA AI",tag:393},
    { title:"Tam Airlines",tag:5966},
    { title:"PINEHURST RESORT",tag:5974},
    { title:"Doral Golf Resort",tag:3589},
    { title:"RAMADA INNS",tag:563},
    { title:"NOVOTEL HOTELS",tag:568},
    { title:"DE VERE HOTELS",tag:574},
    { title:"LOEWS HOTELS",tag:580},
    { title:"KNIGHTS INNS",tag:586},
    { title:"HAMPTON INNS",tag:591},
    { title:"ARCADE HOTELS",tag:596},
    { title:"MONTE CARLO HOTEL/CASIN",tag:602},
    { title:"BRADBURY SUITES",tag:609},
    { title:"CONSORT HOTELS",tag:615},
    { title:"ECONOMY INNS OF AMERICAN",tag:620},
    { title:"REGISTRY HOTELS",tag:628},
    { title:"VIRGIN RIVER HOTEL/CASIN",tag:634},
    { title:"FAIRFIELD INN",tag:641},
    { title:"HILTON CONRAD",tag:647},
    { title:"BALLY'S HOTEL AND CASIN",tag:653},
    { title:"RIVIERA HOTEL AND CASIN",tag:662},
    { title:"CAREFREE RESORTS",tag:668},
    { title:"CROWNE PLAZA HOTELS",tag:675},
    { title:"ORCHID AT MAUNA LAI",tag:684},
    { title:"MAIN STREET STATION HOTEL ",tag:692},
    { title:"SANDSRESOR",tag:700},
    { title:"DISNEYLAND HOTELS",tag:705},
    { title:"STAYBRIDGE SUITES",tag:5935},
    { title:"Trains-Passengers",tag:715},
    { title:"Taxi's (mulit-car fleet)",tag:733},
    { title:"Warehousing - Public goods",tag:766},
    { title:"Harbors",tag:791},
    { title:"Airport Terminals",tag:797},
    { title:"Travel Agencies",tag:822},
    { title:"Cellular Telephone Equipment",tag:839},
    { title:"Long Distanct Telephone Services",tag:865},
    { title:"SATELLITE SERVICES",tag:5939},
    { title:"Sanitary Utility Providers",tag:912},
    { title:"Microfilm Supplies & Equipment",tag:936},
    { title:"Commercial Equipment Sales - Not elsewhere classified",tag:962},
    { title:"Electrical Parts and Equipment",tag:1022},
    { title:"Jewelry Wholesalers",tag:1044},
    { title:"Wholesale Grave Stones",tag:1140},
    { title:"Business Office Supplies",tag:1152},
    { title:"Wholesale Vitamin Sales",tag:1179},
    { title:"Wholesale Commercial Clothing",tag:1217},
    { title:"Wholesale Journals",tag:1239},
    { title:"Wholesale Plants",tag:1251},
    { title:"Baskets",tag:1292},
    { title:"Textile Bags, Burlap & Canvas",tag:1296},
    { title:"Wallcovering Supplies",tag:1328},
    { title:"Plumbing Supplies",tag:1364},
    { title:"Nurseries",tag:1389},
    { title:"Ames",tag:1814},
    { title:"Bradlees",tag:1817},
    { title:"Jamesway",tag:1821},
    { title:"Stand Alone used car and truck lots",tag:5919},
    { title:"Swim Wear Shop",tag:3303},
    { title:"Outdoor Furnishing",tag:3329},
    { title:"Household Appliance Stores",tag:3411},
    { title:"Computer Software Sales",tag:3440},
    { title:"Restaurants - Servicing Alcohol",tag:3467},
    { title:"Secondhand Stores",tag:3493},
    { title:"Wrecking and Salvage Yards",tag:3501},
    { title:"Hunting Equipment",tag:3551},
    { title:"Gun Sales on the Internet",tag:5918},
    { title:"Hobby, Toy and Game Shops",tag:3559},
    { title:"Door-to-Door Sales",tag:3570},
    { title:"900 Number Telephone Service",tag:3758},
    { title:"Pyramid Type Operations",tag:3766},
    { title:"Art Dealers and Galleries",tag:3773},
    { title:"Precious Metals Dealers",tag:3787},
    { title:"Fuel Dealers-Fuel Oil, Wood, Coal and Liquefied Petroleum",tag:3795},
    { title:"Collectibles & Memorabilia Dealers",tag:4057},
    { title:"Party Supply Stores",tag:4065},
    { title:"Financial Institutions - Merchandise & Services",tag:4072},
    { title:"Lodging - Not elsewhere Classified",tag:4107},
    { title:"Carpet & Upholstery Cleaning",tag:4120},
    { title:"Make-Up Studios",tag:4164},
    { title:"Mortuaries & Morticians",tag:4182},
    { title:"Buying & Shopping Services and Clubs",tag:4193},
    { title:"Tanning Salons",tag:4222},
    { title:"Animal Training",tag:4359},
    { title:"Real Estate Brokers, Agents & Managers",tag:4364},
    { title:"Word Processing Services",tag:4382},
    { title:"Computer Programming",tag:4413},
    { title:"Consultants - Management",tag:4425},
    { title:"Home Security Systems",tag:4488},
    { title:"Photofinishing Laboratores & Photo Developing",tag:4496},
    { title:"Publishing Companies",tag:4716},
    { title:"Automobile Rental Agency",tag:4722},
    { title:"Automotive Service Shops-(Non-Dealers)",tag:4750},
    { title:"Furniture-Reupholstery, Repair & Refinishing",tag:4760},
    { title:"Dance Halls, Studios & Schools",tag:4789},
    { title:"Athletic Fields",tag:4817},
    { title:"Medical Massage Therapists",tag:5914},
    { title:"Property Appraisers",tag:5815},
    { title:"Deparment of Motor Vehicles",tag:5850},
    { title:"COUNTRY INN BY CARLSON",tag:7019},
    { title:"PARK PLAZA HOTEL",tag:7020},
    { title:"WALDORF",tag:7021},
    { title:"RADISSON BLU",tag:535},
    { title:"Debt Resolution Companies",tag:7036},
    { title:"Debt Resolution Companies",tag:7037},
    { title:"Third Party Payment Processors for Debt Resolution or Collections Companies",tag:7038},
    { title:"Third Party Payment Processors for Debt Resolution or Collections Companies",tag:7039},
    { title:"Virtual Currency (i.e. bit coin)",tag:7040},
    { title:"Virtual Currency (i.e. bit coin)",tag:7041},
    { title:"Virtual Currency (i.e. bit coin)",tag:7042},
    { title:"Payday Lenders",tag:7043},
    { title:"Payday Lenders",tag:7044},
    { title:"Payday Lenders",tag:7045},
    { title:"Payday Lenders",tag:7046},
    { title:"Auto Title Lenders",tag:7047},
    { title:"Auto Title Lenders",tag:7048},
    { title:"Auto Title Lenders",tag:7049},
    { title:"Auto Title Lenders",tag:7050},
    { title:"AZUL AIR",tag:7051},
    { title:"NON-FIN INST/FC/MO/TC",tag:7052},
    { title:"PARIS LAS VEGAS HOTEL",tag:5953},
    { title:"Health Insurance Sales",tag:4095},
    { title:"DIRECT MARKETING-CATALOG MERCH",tag:3571},
    { title:"Mail Order/Telephone Order",tag:3764},
    { title:"Adoption Agencies - non profit",tag:5911},
    { title:"Atlantic City Hilton",tag:5946},
    { title:"TROPICANA RESORT & CASIN",tag:663},
    { title:"Investment Firms",tag:4081},
    { title:"Embassy/Consulate",tag:7053},
    { title:"Non-FI Loan/Lease Payments",tag:7054},
    { title:"Wizz Air",tag:7055},
    { title:"Insurance Brokers/Agents",tag:7056},
    { title:"Baymont Inn and Suites",tag:7057},
    { title:"Dolce Hotels and Resorts",tag:7058},
    { title:"Hawthorn Suites by Wyndham",tag:7059},
    { title:"LUYOR HOTEL/CASIN",tag:593},
    { title:"TREASURE ISLAND HOTEL AND CASIN",tag:518},
    { title:"Hemp/CBD ",tag:7060},
    { title:"Legal Cannabis Sales",tag:7061},
    { title:"FLYBE",tag:7062},
    { title:"HOSHINO RESORTS",tag:7063},
    { title:"KIMPTON HOTELS",tag:7064},
    ];


    interface CountryType {
        code: string;
        label: string;
        phone: string;
      }
      
      // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
      const countries = [
        { code: 'AD', label: 'Andorra', phone: '376' },
        { code: 'AE', label: 'United Arab Emirates', phone: '971' },
        { code: 'AF', label: 'Afghanistan', phone: '93' },
        { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
        { code: 'AI', label: 'Anguilla', phone: '1-264' },
        { code: 'AL', label: 'Albania', phone: '355' },
        { code: 'AM', label: 'Armenia', phone: '374' },
        { code: 'AO', label: 'Angola', phone: '244' },
        { code: 'AQ', label: 'Antarctica', phone: '672' },
        { code: 'AR', label: 'Argentina', phone: '54' },
        { code: 'AS', label: 'American Samoa', phone: '1-684' },
        { code: 'AT', label: 'Austria', phone: '43' },
        { code: 'AU', label: 'Australia', phone: '61', suggested: true },
        { code: 'AW', label: 'Aruba', phone: '297' },
        { code: 'AX', label: 'Alland Islands', phone: '358' },
        { code: 'AZ', label: 'Azerbaijan', phone: '994' },
        { code: 'BA', label: 'Bosnia and Herzegovina', phone: '387' },
        { code: 'BB', label: 'Barbados', phone: '1-246' },
        { code: 'BD', label: 'Bangladesh', phone: '880' },
        { code: 'BE', label: 'Belgium', phone: '32' },
        { code: 'BF', label: 'Burkina Faso', phone: '226' },
        { code: 'BG', label: 'Bulgaria', phone: '359' },
        { code: 'BH', label: 'Bahrain', phone: '973' },
        { code: 'BI', label: 'Burundi', phone: '257' },
        { code: 'BJ', label: 'Benin', phone: '229' },
        { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
        { code: 'BM', label: 'Bermuda', phone: '1-441' },
        { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
        { code: 'BO', label: 'Bolivia', phone: '591' },
        { code: 'BR', label: 'Brazil', phone: '55' },
        { code: 'BS', label: 'Bahamas', phone: '1-242' },
        { code: 'BT', label: 'Bhutan', phone: '975' },
        { code: 'BV', label: 'Bouvet Island', phone: '47' },
        { code: 'BW', label: 'Botswana', phone: '267' },
        { code: 'BY', label: 'Belarus', phone: '375' },
        { code: 'BZ', label: 'Belize', phone: '501' },
        { code: 'CA', label: 'Canada', phone: '1', suggested: true },
        { code: 'CC', label: 'Cocos (Keeling) Islands', phone: '61' },
        { code: 'CD', label: 'Congo, Democratic Republic of the', phone: '243' },
        { code: 'CF', label: 'Central African Republic', phone: '236' },
        { code: 'CG', label: 'Congo, Republic of the', phone: '242' },
        { code: 'CH', label: 'Switzerland', phone: '41' },
        { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
        { code: 'CK', label: 'Cook Islands', phone: '682' },
        { code: 'CL', label: 'Chile', phone: '56' },
        { code: 'CM', label: 'Cameroon', phone: '237' },
        { code: 'CN', label: 'China', phone: '86' },
        { code: 'CO', label: 'Colombia', phone: '57' },
        { code: 'CR', label: 'Costa Rica', phone: '506' },
        { code: 'CU', label: 'Cuba', phone: '53' },
        { code: 'CV', label: 'Cape Verde', phone: '238' },
        { code: 'CW', label: 'Curacao', phone: '599' },
        { code: 'CX', label: 'Christmas Island', phone: '61' },
        { code: 'CY', label: 'Cyprus', phone: '357' },
        { code: 'CZ', label: 'Czech Republic', phone: '420' },
        { code: 'DE', label: 'Germany', phone: '49', suggested: true },
        { code: 'DJ', label: 'Djibouti', phone: '253' },
        { code: 'DK', label: 'Denmark', phone: '45' },
        { code: 'DM', label: 'Dominica', phone: '1-767' },
        { code: 'DO', label: 'Dominican Republic', phone: '1-809' },
        { code: 'DZ', label: 'Algeria', phone: '213' },
        { code: 'EC', label: 'Ecuador', phone: '593' },
        { code: 'EE', label: 'Estonia', phone: '372' },
        { code: 'EG', label: 'Egypt', phone: '20' },
        { code: 'EH', label: 'Western Sahara', phone: '212' },
        { code: 'ER', label: 'Eritrea', phone: '291' },
        { code: 'ES', label: 'Spain', phone: '34' },
        { code: 'ET', label: 'Ethiopia', phone: '251' },
        { code: 'FI', label: 'Finland', phone: '358' },
        { code: 'FJ', label: 'Fiji', phone: '679' },
        { code: 'FK', label: 'Falkland Islands (Malvinas)', phone: '500' },
        { code: 'FM', label: 'Micronesia, Federated States of', phone: '691' },
        { code: 'FO', label: 'Faroe Islands', phone: '298' },
        { code: 'FR', label: 'France', phone: '33', suggested: true },
        { code: 'GA', label: 'Gabon', phone: '241' },
        { code: 'GB', label: 'United Kingdom', phone: '44' },
        { code: 'GD', label: 'Grenada', phone: '1-473' },
        { code: 'GE', label: 'Georgia', phone: '995' },
        { code: 'GF', label: 'French Guiana', phone: '594' },
        { code: 'GG', label: 'Guernsey', phone: '44' },
        { code: 'GH', label: 'Ghana', phone: '233' },
        { code: 'GI', label: 'Gibraltar', phone: '350' },
        { code: 'GL', label: 'Greenland', phone: '299' },
        { code: 'GM', label: 'Gambia', phone: '220' },
        { code: 'GN', label: 'Guinea', phone: '224' },
        { code: 'GP', label: 'Guadeloupe', phone: '590' },
        { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
        { code: 'GR', label: 'Greece', phone: '30' },
        { code: 'GS', label: 'South Georgia and the South Sandwich Islands', phone: '500' },
        { code: 'GT', label: 'Guatemala', phone: '502' },
        { code: 'GU', label: 'Guam', phone: '1-671' },
        { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
        { code: 'GY', label: 'Guyana', phone: '592' },
        { code: 'HK', label: 'Hong Kong', phone: '852' },
        { code: 'HM', label: 'Heard Island and McDonald Islands', phone: '672' },
        { code: 'HN', label: 'Honduras', phone: '504' },
        { code: 'HR', label: 'Croatia', phone: '385' },
        { code: 'HT', label: 'Haiti', phone: '509' },
        { code: 'HU', label: 'Hungary', phone: '36' },
        { code: 'ID', label: 'Indonesia', phone: '62' },
        { code: 'IE', label: 'Ireland', phone: '353' },
        { code: 'IL', label: 'Israel', phone: '972' },
        { code: 'IM', label: 'Isle of Man', phone: '44' },
        { code: 'IN', label: 'India', phone: '91' },
        { code: 'IO', label: 'British Indian Ocean Territory', phone: '246' },
        { code: 'IQ', label: 'Iraq', phone: '964' },
        { code: 'IR', label: 'Iran, Islamic Republic of', phone: '98' },
        { code: 'IS', label: 'Iceland', phone: '354' },
        { code: 'IT', label: 'Italy', phone: '39' },
        { code: 'JE', label: 'Jersey', phone: '44' },
        { code: 'JM', label: 'Jamaica', phone: '1-876' },
        { code: 'JO', label: 'Jordan', phone: '962' },
        { code: 'JP', label: 'Japan', phone: '81', suggested: true },
        { code: 'KE', label: 'Kenya', phone: '254' },
        { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
        { code: 'KH', label: 'Cambodia', phone: '855' },
        { code: 'KI', label: 'Kiribati', phone: '686' },
        { code: 'KM', label: 'Comoros', phone: '269' },
        { code: 'KN', label: 'Saint Kitts and Nevis', phone: '1-869' },
        { code: 'KP', label: "Korea, Democratic People's Republic of", phone: '850' },
        { code: 'KR', label: 'Korea, Republic of', phone: '82' },
        { code: 'KW', label: 'Kuwait', phone: '965' },
        { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
        { code: 'KZ', label: 'Kazakhstan', phone: '7' },
        { code: 'LA', label: "Lao People's Democratic Republic", phone: '856' },
        { code: 'LB', label: 'Lebanon', phone: '961' },
        { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
        { code: 'LI', label: 'Liechtenstein', phone: '423' },
        { code: 'LK', label: 'Sri Lanka', phone: '94' },
        { code: 'LR', label: 'Liberia', phone: '231' },
        { code: 'LS', label: 'Lesotho', phone: '266' },
        { code: 'LT', label: 'Lithuania', phone: '370' },
        { code: 'LU', label: 'Luxembourg', phone: '352' },
        { code: 'LV', label: 'Latvia', phone: '371' },
        { code: 'LY', label: 'Libya', phone: '218' },
        { code: 'MA', label: 'Morocco', phone: '212' },
        { code: 'MC', label: 'Monaco', phone: '377' },
        { code: 'MD', label: 'Moldova, Republic of', phone: '373' },
        { code: 'ME', label: 'Montenegro', phone: '382' },
        { code: 'MF', label: 'Saint Martin (French part)', phone: '590' },
        { code: 'MG', label: 'Madagascar', phone: '261' },
        { code: 'MH', label: 'Marshall Islands', phone: '692' },
        { code: 'MK', label: 'Macedonia, the Former Yugoslav Republic of', phone: '389' },
        { code: 'ML', label: 'Mali', phone: '223' },
        { code: 'MM', label: 'Myanmar', phone: '95' },
        { code: 'MN', label: 'Mongolia', phone: '976' },
        { code: 'MO', label: 'Macao', phone: '853' },
        { code: 'MP', label: 'Northern Mariana Islands', phone: '1-670' },
        { code: 'MQ', label: 'Martinique', phone: '596' },
        { code: 'MR', label: 'Mauritania', phone: '222' },
        { code: 'MS', label: 'Montserrat', phone: '1-664' },
        { code: 'MT', label: 'Malta', phone: '356' },
        { code: 'MU', label: 'Mauritius', phone: '230' },
        { code: 'MV', label: 'Maldives', phone: '960' },
        { code: 'MW', label: 'Malawi', phone: '265' },
        { code: 'MX', label: 'Mexico', phone: '52' },
        { code: 'MY', label: 'Malaysia', phone: '60' },
        { code: 'MZ', label: 'Mozambique', phone: '258' },
        { code: 'NA', label: 'Namibia', phone: '264' },
        { code: 'NC', label: 'New Caledonia', phone: '687' },
        { code: 'NE', label: 'Niger', phone: '227' },
        { code: 'NF', label: 'Norfolk Island', phone: '672' },
        { code: 'NG', label: 'Nigeria', phone: '234' },
        { code: 'NI', label: 'Nicaragua', phone: '505' },
        { code: 'NL', label: 'Netherlands', phone: '31' },
        { code: 'NO', label: 'Norway', phone: '47' },
        { code: 'NP', label: 'Nepal', phone: '977' },
        { code: 'NR', label: 'Nauru', phone: '674' },
        { code: 'NU', label: 'Niue', phone: '683' },
        { code: 'NZ', label: 'New Zealand', phone: '64' },
        { code: 'OM', label: 'Oman', phone: '968' },
        { code: 'PA', label: 'Panama', phone: '507' },
        { code: 'PE', label: 'Peru', phone: '51' },
        { code: 'PF', label: 'French Polynesia', phone: '689' },
        { code: 'PG', label: 'Papua New Guinea', phone: '675' },
        { code: 'PH', label: 'Philippines', phone: '63' },
        { code: 'PK', label: 'Pakistan', phone: '92' },
        { code: 'PL', label: 'Poland', phone: '48' },
        { code: 'PM', label: 'Saint Pierre and Miquelon', phone: '508' },
        { code: 'PN', label: 'Pitcairn', phone: '870' },
        { code: 'PR', label: 'Puerto Rico', phone: '1' },
        { code: 'PS', label: 'Palestine, State of', phone: '970' },
        { code: 'PT', label: 'Portugal', phone: '351' },
        { code: 'PW', label: 'Palau', phone: '680' },
        { code: 'PY', label: 'Paraguay', phone: '595' },
        { code: 'QA', label: 'Qatar', phone: '974' },
        { code: 'RE', label: 'Reunion', phone: '262' },
        { code: 'RO', label: 'Romania', phone: '40' },
        { code: 'RS', label: 'Serbia', phone: '381' },
        { code: 'RU', label: 'Russian Federation', phone: '7' },
        { code: 'RW', label: 'Rwanda', phone: '250' },
        { code: 'SA', label: 'Saudi Arabia', phone: '966' },
        { code: 'SB', label: 'Solomon Islands', phone: '677' },
        { code: 'SC', label: 'Seychelles', phone: '248' },
        { code: 'SD', label: 'Sudan', phone: '249' },
        { code: 'SE', label: 'Sweden', phone: '46' },
        { code: 'SG', label: 'Singapore', phone: '65' },
        { code: 'SH', label: 'Saint Helena', phone: '290' },
        { code: 'SI', label: 'Slovenia', phone: '386' },
        { code: 'SJ', label: 'Svalbard and Jan Mayen', phone: '47' },
        { code: 'SK', label: 'Slovakia', phone: '421' },
        { code: 'SL', label: 'Sierra Leone', phone: '232' },
        { code: 'SM', label: 'San Marino', phone: '378' },
        { code: 'SN', label: 'Senegal', phone: '221' },
        { code: 'SO', label: 'Somalia', phone: '252' },
        { code: 'SR', label: 'Suriname', phone: '597' },
        { code: 'SS', label: 'South Sudan', phone: '211' },
        { code: 'ST', label: 'Sao Tome and Principe', phone: '239' },
        { code: 'SV', label: 'El Salvador', phone: '503' },
        { code: 'SX', label: 'Sint Maarten (Dutch part)', phone: '1-721' },
        { code: 'SY', label: 'Syrian Arab Republic', phone: '963' },
        { code: 'SZ', label: 'Swaziland', phone: '268' },
        { code: 'TC', label: 'Turks and Caicos Islands', phone: '1-649' },
        { code: 'TD', label: 'Chad', phone: '235' },
        { code: 'TF', label: 'French Southern Territories', phone: '262' },
        { code: 'TG', label: 'Togo', phone: '228' },
        { code: 'TH', label: 'Thailand', phone: '66' },
        { code: 'TJ', label: 'Tajikistan', phone: '992' },
        { code: 'TK', label: 'Tokelau', phone: '690' },
        { code: 'TL', label: 'Timor-Leste', phone: '670' },
        { code: 'TM', label: 'Turkmenistan', phone: '993' },
        { code: 'TN', label: 'Tunisia', phone: '216' },
        { code: 'TO', label: 'Tonga', phone: '676' },
        { code: 'TR', label: 'Turkey', phone: '90' },
        { code: 'TT', label: 'Trinidad and Tobago', phone: '1-868' },
        { code: 'TV', label: 'Tuvalu', phone: '688' },
        { code: 'TW', label: 'Taiwan, Province of China', phone: '886' },
        { code: 'TZ', label: 'United Republic of Tanzania', phone: '255' },
        { code: 'UA', label: 'Ukraine', phone: '380' },
        { code: 'UG', label: 'Uganda', phone: '256' },
        { code: 'US', label: 'United States', phone: '1', suggested: true },
        { code: 'UY', label: 'Uruguay', phone: '598' },
        { code: 'UZ', label: 'Uzbekistan', phone: '998' },
        { code: 'VA', label: 'Holy See (Vatican City State)', phone: '379' },
        { code: 'VC', label: 'Saint Vincent and the Grenadines', phone: '1-784' },
        { code: 'VE', label: 'Venezuela', phone: '58' },
        { code: 'VG', label: 'British Virgin Islands', phone: '1-284' },
        { code: 'VI', label: 'US Virgin Islands', phone: '1-340' },
        { code: 'VN', label: 'Vietnam', phone: '84' },
        { code: 'VU', label: 'Vanuatu', phone: '678' },
        { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
        { code: 'WS', label: 'Samoa', phone: '685' },
        { code: 'XK', label: 'Kosovo', phone: '383' },
        { code: 'YE', label: 'Yemen', phone: '967' },
        { code: 'YT', label: 'Mayotte', phone: '262' },
        { code: 'ZA', label: 'South Africa', phone: '27' },
        { code: 'ZM', label: 'Zambia', phone: '260' },
        { code: 'ZW', label: 'Zimbabwe', phone: '263' },
      ];

function countryToFlag(isoCode: string) {
return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];


function getSteps() {
  return ['How will you take payments with us?', 'What will you use to take payments?', 'Getting to know you', 'Tell us about your business', 'More business information', 'Let\'s talk about you', 'Business contact information', 'Legal information', 'Account Setup', 'Terms and Conditions '];
}

function GetStepContent(step: number) {

  const defaultProps = {
        options: business_descriptions,
        getOptionLabel: (option: MCC) => option.title,
        };
  
  const classes = useStyles1();
  const classes2 = useStyles2();
  
  const [currency, setCurrency] = React.useState('USD');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
    
  switch (step) {
    case 0:
      return `Select all that apply. You can always adjust this later.`;
    case 1: 
      return '';
    case 2:
      return   <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <FormLabel component="legend">Are you a Costco member?</FormLabel>
                        <br/>
                        <TextField variant='outlined' label='Membership ID'>Membership ID</TextField>
                    </FormGroup>
                </FormControl>;
    case 3:
        return <Autocomplete
                    {...defaultProps}
                    id="MCC"
                    renderInput={(params) => <TextField variant="outlined" {...params} label="Business Category" margin="normal" />}
                />;
    case 4:
        return <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <FormLabel component="legend">Where are you a citizen?</FormLabel>
                        <br/>
                        <Autocomplete
                            id="country-select-demo"
                            style={{ width: 300 }}
                            options={countries as CountryType[]}
                            classes={{
                                option: classes2.option,
                            }}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(option) => (
                                <React.Fragment>
                                <span>{countryToFlag(option.code)}</span>
                                {option.label} ({option.code}) +{option.phone}
                                </React.Fragment>
                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="Choose a country"
                                variant="outlined"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                            />
                            
                    </FormGroup>
                    <br/>
                    <br/>
                    <FormGroup>
                        <FormLabel component="legend">Where do you primarily operate?</FormLabel>
                        <br/>
                        <Autocomplete
                            id="country-select-demo"
                            style={{ width: 300 }}
                            options={countries as CountryType[]}
                            classes={{
                                option: classes2.option,
                            }}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(option) => (
                                <React.Fragment>
                                <span>{countryToFlag(option.code)}</span>
                                {option.label} ({option.code}) +{option.phone}
                                </React.Fragment>
                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="Choose a country"
                                variant="outlined"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                            />
                            
                    </FormGroup>
                    <br/>
                    <br/>
                    <FormGroup>
                        <FormLabel component="legend">Where was your business founded?</FormLabel>
                        <br/>
                        <Autocomplete
                            id="country-select-demo"
                            style={{ width: 300 }}
                            options={countries as CountryType[]}
                            classes={{
                                option: classes2.option,
                            }}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(option) => (
                                <React.Fragment>
                                <span>{countryToFlag(option.code)}</span>
                                {option.label} ({option.code}) +{option.phone}
                                </React.Fragment>
                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="Choose a country"
                                variant="outlined"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                            />
                            
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <TextField variant='outlined' label='Business Establishment Year'></TextField>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <TextField variant='outlined' label='Monthly Credit Card Sales'></TextField>
                    <br/>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Currency"
                        variant='outlined'
                        value={currency}
                        onChange={handleChange}
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                    </FormGroup>
                </FormControl>;
    case 5:
        return '';
    case 6:
        return '';
    case 7:
        return '';
    case 8:
        return '';
    case 9:
        return '';
    default:
      return 'Unknown step';
  }
}

function GetStepContent1(step: number) {

    const labelId = `checkbox-list-label-${step}`;
    const index = 1;
    const classes = useStyles1();

    const [value, setValue] = React.useState('new');
    const { t } = useTranslation();


    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
      };

    

    switch (step) {
      case 0:
        return <List>
                    <ListItem key={step} role={undefined} dense button onClick={handleToggle(step)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(step) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`Brick and Mortar location`} />
                    </ListItem>
                    <ListItem key={step} role={undefined} dense button onClick={handleToggle(index + 1)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(index+1) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': `checkbox-list-label-${step+1}` }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`On-the-go`} />
                    </ListItem>
                    <ListItem key={step} role={undefined} dense button onClick={handleToggle(index + 2)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(index+2) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': `checkbox-list-label-${step+2}` }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`At an event`} />
                    </ListItem>
                    <ListItem key={step} role={undefined} dense button onClick={handleToggle(index + 3)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(index+3) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': `checkbox-list-label-${step+3}` }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`Through an online website`} />
                    </ListItem>
                    <ListItem key={step} role={undefined} dense button onClick={handleToggle(index + 4)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(index+4) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': `checkbox-list-label-${step+4}` }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`Through sent invoices`} />
                    </ListItem>
                </List>;
      case 1:
        return <List>
                <ListItem key={step} role={undefined} dense button onClick={handleToggle(step)}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(step) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`Mobile Phone`} />
                </ListItem>
                <ListItem key={step} role={undefined} dense button onClick={handleToggle(index + 1)}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(index+1) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': `checkbox-list-label-${step+1}` }}
                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`Tablet`} />
                </ListItem>
                <ListItem key={step} role={undefined} dense button onClick={handleToggle(index + 2)}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(index+2) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': `checkbox-list-label-${step+2}` }}
                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`Computer`} />
                </ListItem>
                <ListItem key={step} role={undefined} dense button onClick={handleToggle(index + 3)}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(index+3) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': `checkbox-list-label-${step+3}` }}
                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`All-in-one register`} />
                </ListItem>
                <ListItem key={step} role={undefined} dense button onClick={handleToggle(index + 4)}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(index+4) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': `checkbox-list-label-${step+4}` }}
                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`Standalone card reader`} />
                </ListItem>
            </List>;
      case 2:
        return <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup aria-label="business size" name="business_size" value={value} onChange={handleChangeRadio}>
                        <FormLabel component="legend">Are you a sole proprietor?</FormLabel>
                        <FormControlLabel value="Yes" control={<Radio />} label={t('yes')} />
                        <FormControlLabel value="No" control={<Radio />} label='No' />
                        </RadioGroup>
                        <br/>
                        <br/>
                        <FormGroup>
                        <FormLabel component="legend">What percentage are you responsible for?</FormLabel>
                        <br/>
                        <TextField variant='outlined' label='Ownership Percentage'>Membership ID</TextField>
                        </FormGroup>
                </FormControl>;
    case 3: 
        return '';
    case 4:
        return '';
    case 5:
        return '';
    case 6:
        return '';
    case 7:
        return '';
    case 8:
        return '';
    case 9:
        return '';
      default:
        return 'Unknown step';
    }
  }

export default function VerticalLinearStepper() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
        
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{GetStepContent(index)}</Typography>
              <Typography>{GetStepContent1(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div> 
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );

  
}