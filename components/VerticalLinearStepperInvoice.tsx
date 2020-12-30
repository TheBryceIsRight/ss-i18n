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
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import useTranslation from '../hooks/useTranslation';



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



interface CountryType {
    code: string;
    label: string;
    }
    
    // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
    const countries = [
    { code: 'AD', label: 'Andorra' },
    { code: 'AE', label: 'United Arab Emirates'},
    { code: 'AF', label: 'Afghanistan' },
    { code: 'AG', label: 'Antigua and Barbuda' },
    { code: 'AI', label: 'Anguilla'},
    { code: 'AL', label: 'Albania'},
    { code: 'AM', label: 'Armenia' },
    { code: 'AO', label: 'Angola' },
    { code: 'AQ', label: 'Antarctica' },
    { code: 'AR', label: 'Argentina' },
    { code: 'AS', label: 'American Samoa'},
    { code: 'AT', label: 'Austria' },
    { code: 'AU', label: 'Australia' },
    { code: 'AW', label: 'Aruba' },
    { code: 'AX', label: 'Alland Islands'},
    { code: 'AZ', label: 'Azerbaijan' },
    { code: 'BA', label: 'Bosnia and Herzegovina' },
    { code: 'BB', label: 'Barbados' },
    { code: 'BD', label: 'Bangladesh' },
    { code: 'BE', label: 'Belgium'},
    { code: 'BF', label: 'Burkina Faso'},
    { code: 'BG', label: 'Bulgaria' },
    { code: 'BH', label: 'Bahrain'},
    { code: 'BI', label: 'Burundi' },
    { code: 'BJ', label: 'Benin' },
    { code: 'BL', label: 'Saint Barthelemy' },
    { code: 'BM', label: 'Bermuda' },
    { code: 'BN', label: 'Brunei Darussalam' },
    { code: 'BO', label: 'Bolivia' },
    { code: 'BR', label: 'Brazil'},
    { code: 'BS', label: 'Bahamas'},
    { code: 'BT', label: 'Bhutan' },
    { code: 'BV', label: 'Bouvet Island' },
    { code: 'BW', label: 'Botswana' },
    { code: 'BY', label: 'Belarus' },
    { code: 'BZ', label: 'Belize' },
    { code: 'CA', label: 'Canada' },
    { code: 'CC', label: 'Cocos (Keeling) Islands' },
    { code: 'CD', label: 'Congo, Democratic Republic of the' },
    { code: 'CF', label: 'Central African Republic' },
    { code: 'CG', label: 'Congo, Republic of the'},
    { code: 'CH', label: 'Switzerland' },
    { code: 'CI', label: "Cote d'Ivoire" },
    { code: 'CK', label: 'Cook Islands'},
    { code: 'CL', label: 'Chile' },
    { code: 'CM', label: 'Cameroon' },
    { code: 'CN', label: 'China' },
    { code: 'CO', label: 'Colombia' },
    { code: 'CR', label: 'Costa Rica' },
    { code: 'CU', label: 'Cuba' },
    { code: 'CV', label: 'Cape Verde' },
    { code: 'CW', label: 'Curacao' },
    { code: 'CX', label: 'Christmas Island' },
    { code: 'CY', label: 'Cyprus'},
    { code: 'CZ', label: 'Czech Republic' },
    { code: 'DE', label: 'Germany' },
    { code: 'DJ', label: 'Djibouti' },
    { code: 'DK', label: 'Denmark' },
    { code: 'DM', label: 'Dominica' },
    { code: 'DO', label: 'Dominican Republic' },
    { code: 'DZ', label: 'Algeria' },
    { code: 'EC', label: 'Ecuador' },
    { code: 'EE', label: 'Estonia' },
    { code: 'EG', label: 'Egypt' },
    { code: 'EH', label: 'Western Sahara' },
    { code: 'ER', label: 'Eritrea' },
    { code: 'ES', label: 'Spain' },
    { code: 'ET', label: 'Ethiopia' },
    { code: 'FI', label: 'Finland' },
    { code: 'FJ', label: 'Fiji' },
    { code: 'FK', label: 'Falkland Islands (Malvinas)' },
    { code: 'FM', label: 'Micronesia, Federated States of' },
    { code: 'FO', label: 'Faroe Islands' },
    { code: 'FR', label: 'France' },
    { code: 'GA', label: 'Gabon' },
    { code: 'GB', label: 'United Kingdom' },
    { code: 'GD', label: 'Grenada'},
    { code: 'GE', label: 'Georgia' },
    { code: 'GF', label: 'French Guiana'},
    { code: 'GG', label: 'Guernsey' },
    { code: 'GH', label: 'Ghana'},
    { code: 'GI', label: 'Gibraltar'},
    { code: 'GL', label: 'Greenland' },
    { code: 'GM', label: 'Gambia'},
    { code: 'GN', label: 'Guinea' },
    { code: 'GP', label: 'Guadeloupe' },
    { code: 'GQ', label: 'Equatorial Guinea' },
    { code: 'GR', label: 'Greece' },
    { code: 'GS', label: 'South Georgia and the South Sandwich Islands' },
    { code: 'GT', label: 'Guatemala'},
    { code: 'GU', label: 'Guam'},
    { code: 'GW', label: 'Guinea-Bissau' },
    { code: 'GY', label: 'Guyana' },
    { code: 'HK', label: 'Hong Kong' },
    { code: 'HM', label: 'Heard Island and McDonald Islands' },
    { code: 'HN', label: 'Honduras'},
    { code: 'HR', label: 'Croatia' },
    { code: 'HT', label: 'Haiti' },
    { code: 'HU', label: 'Hungary' },
    { code: 'ID', label: 'Indonesia' },
    { code: 'IE', label: 'Ireland' },
    { code: 'IL', label: 'Israel' },
    { code: 'IM', label: 'Isle of Man' },
    { code: 'IN', label: 'India' },
    { code: 'IO', label: 'British Indian Ocean Territory' },
    { code: 'IQ', label: 'Iraq' },
    { code: 'IR', label: 'Iran, Islamic Republic of'},
    { code: 'IS', label: 'Iceland' },
    { code: 'IT', label: 'Italy' },
    { code: 'JE', label: 'Jersey' },
    { code: 'JM', label: 'Jamaica' },
    { code: 'JO', label: 'Jordan'},
    { code: 'JP', label: 'Japan' },
    { code: 'KE', label: 'Kenya' },
    { code: 'KG', label: 'Kyrgyzstan' },
    { code: 'KH', label: 'Cambodia' },
    { code: 'KI', label: 'Kiribati'},
    { code: 'KM', label: 'Comoros' },
    { code: 'KN', label: 'Saint Kitts and Nevis' },
    { code: 'KP', label: "Korea, Democratic People's Republic of"},
    { code: 'KR', label: 'Korea, Republic of' },
    { code: 'KW', label: 'Kuwait' },
    { code: 'KY', label: 'Cayman Islands' },
    { code: 'KZ', label: 'Kazakhstan'},
    { code: 'LA', label: "Lao People's Democratic Republic" },
    { code: 'LB', label: 'Lebanon'},
    { code: 'LC', label: 'Saint Lucia' },
    { code: 'LI', label: 'Liechtenstein' },
    { code: 'LK', label: 'Sri Lanka' },
    { code: 'LR', label: 'Liberia' },
    { code: 'LS', label: 'Lesotho' },
    { code: 'LT', label: 'Lithuania' },
    { code: 'LU', label: 'Luxembourg' },
    { code: 'LV', label: 'Latvia' },
    { code: 'LY', label: 'Libya' },
    { code: 'MA', label: 'Morocco' },
    { code: 'MC', label: 'Monaco' },
    { code: 'MD', label: 'Moldova, Republic of' },
    { code: 'ME', label: 'Montenegro'},
    { code: 'MF', label: 'Saint Martin (French part)' },
    { code: 'MG', label: 'Madagascar' },
    { code: 'MH', label: 'Marshall Islands' },
    { code: 'MK', label: 'Macedonia, the Former Yugoslav Republic of'},
    { code: 'ML', label: 'Mali' },
    { code: 'MM', label: 'Myanmar'},
    { code: 'MN', label: 'Mongolia'},
    { code: 'MO', label: 'Macao' },
    { code: 'MP', label: 'Northern Mariana Islands' },
    { code: 'MQ', label: 'Martinique' },
    { code: 'MR', label: 'Mauritania' },
    { code: 'MS', label: 'Montserrat' },
    { code: 'MT', label: 'Malta' },
    { code: 'MU', label: 'Mauritius' },
    { code: 'MV', label: 'Maldives'},
    { code: 'MW', label: 'Malawi' },
    { code: 'MX', label: 'Mexico' },
    { code: 'MY', label: 'Malaysia' },
    { code: 'MZ', label: 'Mozambique' },
    { code: 'NA', label: 'Namibia'},
    { code: 'NC', label: 'New Caledonia' },
    { code: 'NE', label: 'Niger' },
    { code: 'NF', label: 'Norfolk Island' },
    { code: 'NG', label: 'Nigeria' },
    { code: 'NI', label: 'Nicaragua' },
    { code: 'NL', label: 'Netherlands' },
    { code: 'NO', label: 'Norway' },
    { code: 'NP', label: 'Nepal' },
    { code: 'NR', label: 'Nauru' },
    { code: 'NU', label: 'Niue' },
    { code: 'NZ', label: 'New Zealand' },
    { code: 'OM', label: 'Oman' },
    { code: 'PA', label: 'Panama' },
    { code: 'PE', label: 'Peru' },
    { code: 'PF', label: 'French Polynesia'},
    { code: 'PG', label: 'Papua New Guinea' },
    { code: 'PH', label: 'Philippines'},
    { code: 'PK', label: 'Pakistan' },
    { code: 'PL', label: 'Poland'},
    { code: 'PM', label: 'Saint Pierre and Miquelon' },
    { code: 'PN', label: 'Pitcairn' },
    { code: 'PR', label: 'Puerto Rico' },
    { code: 'PS', label: 'Palestine, State of' },
    { code: 'PT', label: 'Portugal' },
    { code: 'PW', label: 'Palau'},
    { code: 'PY', label: 'Paraguay' },
    { code: 'QA', label: 'Qatar' },
    { code: 'RE', label: 'Reunion' },
    { code: 'RO', label: 'Romania' },
    { code: 'RS', label: 'Serbia' },
    { code: 'RU', label: 'Russian Federation' },
    { code: 'RW', label: 'Rwanda' },
    { code: 'SA', label: 'Saudi Arabia'},
    { code: 'SB', label: 'Solomon Islands' },
    { code: 'SC', label: 'Seychelles' },
    { code: 'SD', label: 'Sudan' },
    { code: 'SE', label: 'Sweden' },
    { code: 'SG', label: 'Singapore' },
    { code: 'SH', label: 'Saint Helena' },
    { code: 'SI', label: 'Slovenia' },
    { code: 'SJ', label: 'Svalbard and Jan Mayen' },
    { code: 'SK', label: 'Slovakia' },
    { code: 'SL', label: 'Sierra Leone' },
    { code: 'SM', label: 'San Marino' },
    { code: 'SN', label: 'Senegal' },
    { code: 'SO', label: 'Somalia' },
    { code: 'SR', label: 'Suriname' },
    { code: 'SS', label: 'South Sudan' },
    { code: 'ST', label: 'Sao Tome and Principe' },
    { code: 'SV', label: 'El Salvador' },
    { code: 'SX', label: 'Sint Maarten (Dutch part)' },
    { code: 'SY', label: 'Syrian Arab Republic' },
    { code: 'SZ', label: 'Swaziland' },
    { code: 'TC', label: 'Turks and Caicos Islands' },
    { code: 'TD', label: 'Chad' },
    { code: 'TF', label: 'French Southern Territories' },
    { code: 'TG', label: 'Togo' },
    { code: 'TH', label: 'Thailand' },
    { code: 'TJ', label: 'Tajikistan'},
    { code: 'TK', label: 'Tokelau' },
    { code: 'TL', label: 'Timor-Leste' },
    { code: 'TM', label: 'Turkmenistan' },
    { code: 'TN', label: 'Tunisia'},
    { code: 'TO', label: 'Tonga' },
    { code: 'TR', label: 'Turkey' },
    { code: 'TT', label: 'Trinidad and Tobago'},
    { code: 'TV', label: 'Tuvalu' },
    { code: 'TW', label: 'Taiwan, Province of China' },
    { code: 'TZ', label: 'United Republic of Tanzania' },
    { code: 'UA', label: 'Ukraine'},
    { code: 'UG', label: 'Uganda' },
    { code: 'US', label: 'United States' },
    { code: 'UY', label: 'Uruguay' },
    { code: 'UZ', label: 'Uzbekistan' },
    { code: 'VA', label: 'Holy See (Vatican City State)' },
    { code: 'VC', label: 'Saint Vincent and the Grenadines' },
    { code: 'VE', label: 'Venezuela' },
    { code: 'VG', label: 'British Virgin Islands'},
    { code: 'VI', label: 'US Virgin Islands' },
    { code: 'VN', label: 'Vietnam' },
    { code: 'VU', label: 'Vanuatu' },
    { code: 'WF', label: 'Wallis and Futuna' },
    { code: 'WS', label: 'Samoa' },
    { code: 'XK', label: 'Kosovo' },
    { code: 'YE', label: 'Yemen' },
    { code: 'YT', label: 'Mayotte' },
    { code: 'ZA', label: 'South Africa' },
    { code: 'ZM', label: 'Zambia' },
    { code: 'ZW', label: 'Zimbabwe' },
    ];

    interface StateType {
    name: string;
    abbreviation: string;
    }

    const states = [
    {name:"Alabama",abbreviation:"AL"},
    {name:"Alaska",abbreviation:"AK"},
    {name:"Arizona",abbreviation:"AZ"},
    {name:"Arkansas",abbreviation:"AR"},
    {name:"California",abbreviation:"CA"},
    {name:"Colorado",abbreviation:"CO"},
    {name:"Connecticut",abbreviation:"CT"},
    {name:"Delaware",abbreviation:"DE"},
    {name:"Florida",abbreviation:"FL"},
    {name:"Georgia",abbreviation:"GA"},
    {name:"Hawaii",abbreviation:"HI"},
    {name:"Idaho",abbreviation:"ID"},
    {name:"Illinois",abbreviation:"IL"},
    {name:"Indiana",abbreviation:"IN"},
    {name:"Iowa",abbreviation:"IA"},
    {name:"Kansas",abbreviation:"KS"},
    {name:"Kentucky",abbreviation:"KY"},
    {name:"Louisiana",abbreviation:"LA"},
    {name:"Maine",abbreviation:"ME"},
    {name:"Maryland",abbreviation:"MD"},
    {name:"Massachusetts",abbreviation:"MA"},
    {name:"Michigan",abbreviation:"MI"},
    {name:"Minnesota",abbreviation:"MN"},
    {name:"Mississippi",abbreviation:"MS"},
    {name:"Missouri",abbreviation:"MO"},
    {name:"Montana",abbreviation:"MT"},
    {name:"Nebraska",abbreviation:"NE"},
    {name:"Nevada",abbreviation:"NV"},
    {name:"New Hampshire",abbreviation:"NH"},
    {name:"New Jersey",abbreviation:"NJ"},
    {name:"New Mexico",abbreviation:"NM"},
    {name:"New York",abbreviation:"NY"},
    {name:"North Carolina",abbreviation:"NC"},
    {name:"North Dakota",abbreviation:"ND"},
    {name:"Ohio",abbreviation:"OH"},
    {name:"Oklahoma",abbreviation:"OK"},
    {name:"Oregon",abbreviation:"OR"},
    {name:"Pennsylvania",abbreviation:"PA"},
    {name:"Rhode Island",abbreviation:"RI"},
    {name:"South Carolina",abbreviation:"SC"},
    {name:"South Dakota",abbreviation:"SD"},
    {name:"Tennessee",abbreviation:"TN"},
    {name:"Texas",abbreviation:"TX"},
    {name:"Utah",abbreviation:"UT"},
    {name:"Vermont",abbreviation:"VT"},
    {name:"Virginia",abbreviation:"VA"},
    {name:"Washington",abbreviation:"WA"},
    {name:"West Virginia",abbreviation:"WV"},
    {name:"Wisconsin",abbreviation:"WI"},
    {name:"Wyoming",abbreviation:"WY"},

    ];

function countryToFlag(isoCode: string) {
return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}


function GetSteps() {
  const { t } = useTranslation();

  return [t("general_info"), t("legal_information"), t("event_billing"),  t("billing_address"), t("shipping_address"), t("invoice_terms")];
}

function GetStepContent(step: number) {
  const { t } = useTranslation();
  
  const classes = useStyles1();
  const classes2 = useStyles2();
  
  const [value, setValue] = React.useState('new');

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2020-12-18T21:11:54'),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

    
  switch (step) {
    case 0:
      return <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <TextField variant='outlined' label= {t("find_a_product")} ></TextField>
                    <br/>
                    <br/>
                </FormGroup>
                <FormGroup>
                    <FormLabel component="legend">{t("product_info")}</FormLabel>
                    <br/>
                    <TextField variant='outlined' label={t("product_descr")}></TextField>
                    <br/>
                    <TextField variant='outlined' label={t("product_code")}></TextField>
                    <br/>
                    <TextField variant='outlined' label={t("unit_price")} InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }} ></TextField>
                    <br/>
                    <TextField variant='outlined' label={t("quantity")}></TextField>
                </FormGroup>
            </FormControl>;
    case 1: 
      return <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <TextField variant='outlined' label={t("invoice_no")}></TextField>
                    <br/>
                    <TextField variant='outlined' label={t("mid")}></TextField>
                    <br/>
                    <TextField variant='outlined' label={t("subtotal")} InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }} ></TextField>
                    <br/>
                    <TextField variant='outlined' label={t("sales_tax")}></TextField>
                    <br/>
                    <TextField variant='outlined' label={t("discount")}></TextField>
                </FormGroup>
            </FormControl>;
    case 2:
      return   <FormControl component="fieldset" className={classes.formControl}>
      <FormGroup>
          <FormLabel component="legend">{t("legal_name")}</FormLabel>
          <br/>
          <TextField variant='outlined' label={t("first_name")}></TextField>
          <br/>
          <TextField variant='outlined' label={t("last_name")}></TextField>
          <br/>
          <br/>
          <FormLabel component="legend">{t("company_info")}</FormLabel>
          <br/>
          <TextField variant='outlined' label={t("company_name")}></TextField>
      </FormGroup>
      
      <br/>        
      <br/>
      <FormGroup>
      <FormLabel component="legend">{t("primary_phone")}</FormLabel>
      <br/>
      <TextField variant='outlined' label={t("phone_no")} placeholder='(000) 000-0000'></TextField>
      </FormGroup>
      <FormGroup>
      <br/>
      <br/>
      <FormLabel component="legend">{t("primary_email")}</FormLabel>
      <br/>
      <TextField variant='outlined' label={t("email")} placeholder='user@elavon.com'></TextField>
      <br/>
      <br/>
    <FormLabel component="legend">{t("event_info")}</FormLabel>
    <br/>
    <TextField variant='outlined' label={t("event_name")}></TextField> 
    <br/>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label={t("event_date")}
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
      </FormGroup>
  </FormControl>;
    case 3:
        return <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
            <FormLabel component="legend">{t("legal_name")}</FormLabel>
            <br/>
            <TextField variant='outlined' label={t("first_name")}></TextField>
            <br/>
            <TextField variant='outlined' label={t("last_name")}></TextField>
        </FormGroup>
        <br/>
        <br/>
        <FormGroup>
            <FormLabel component="legend">{t("home_address")}</FormLabel>
            <br/>
            <TextField variant='outlined' fullWidth label={t("street_address")} placeholder={t("placeholder_address")}></TextField>
            <br/>
            <TextField variant='outlined' label={t("apt_unit")}></TextField>
            <br/>
            <TextField variant='outlined' label={t("zip")} placeholder='00000'></TextField>
            <br/>
            <TextField variant='outlined' label={t("city")}></TextField>
        </FormGroup>
        <br/>
        <br/>
        <FormGroup>
                        <FormLabel component="legend">{t("country")}</FormLabel>
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
                                {option.label} ({option.code})
                                </React.Fragment>
                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label={t("choose_a_country")}
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
        <Autocomplete
                    id="state-select-demo"
                    style={{ width: 300 }}
                    options={states as StateType[]}
                    classes={{
                        option: classes2.option,
                    }}
                    autoHighlight
                    getOptionLabel={(option) => option.name}
                    renderOption={(option) => (
                        <React.Fragment>
                        <span>{countryToFlag(option.abbreviation)}</span>
                        {option.name}
                        </React.Fragment>
                    )}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        label={t("state")}
                        variant="outlined"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                        />
                    )}
                    />
        </FormGroup>
        
    </FormControl>;
    case 4:
        return <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup aria-label="business size" name="business_size" value={value} onChange={handleChangeRadio}>
                        <FormLabel component="legend">{t("business_same_as_legal")}</FormLabel>
                        <FormControlLabel value="Yes" control={<Radio />} label={t("yes")} />
                        <FormControlLabel value="No" control={<Radio />} label={t("no")} />
                    </RadioGroup>
            <br/>
            <br/>
        <FormGroup>
            <FormLabel component="legend">{t("business_same_as_legal")}</FormLabel>
            <br/>
            <TextField variant='outlined' label={t("first_name")}></TextField>
            <br/>
            <TextField variant='outlined' label={t("last_name")}></TextField>
        </FormGroup>
        <br/>
        <br/>
        <FormGroup>
            <FormLabel component="legend">{t("shipping_address")}</FormLabel>
            <br/>
            <TextField variant='outlined' fullWidth label={t("street_address")} placeholder={t("placeholder_address")}></TextField>
            <br/>
            <TextField variant='outlined' label={t("apt_unit")}></TextField>
            <br/>
            <TextField variant='outlined' label={t("zip")} placeholder='00000'></TextField>
            <br/>
            <TextField variant='outlined' label={t("city")}></TextField>
            
        </FormGroup>
        <br/>
        <FormGroup>
        <Autocomplete
                    id="state-select-demo"
                    style={{ width: 300 }}
                    options={states as StateType[]}
                    classes={{
                        option: classes2.option,
                    }}
                    autoHighlight
                    getOptionLabel={(option) => option.name}
                    renderOption={(option) => (
                        <React.Fragment>
                        <span>{countryToFlag(option.abbreviation)}</span>
                        {option.name}
                        </React.Fragment>
                    )}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        label={t("state")}
                        variant="outlined"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                        />
                    )}
                    />
        </FormGroup>
        
    </FormControl>;
    case 5:
        return <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
            <FormLabel component="legend">{t("addtional_terms")}</FormLabel>
            <br/>
            <TextField variant='outlined' label={t("company")}></TextField>
        </FormGroup>
    </FormControl>;
    default:
      return 'Unknown step';
  }
}


export default function VerticalLinearStepperInvoice() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = GetSteps();
  const { t } = useTranslation();
  

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
              <div className={classes.actionsContainer}>
                <div> 
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    {t("back")}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ?  t('finish') : t('next')}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography variant='subtitle1'>{t('invoice_sent')}</Typography>
          <br/>
          <Typography variant='subtitle1'>{t('please_check_email')}</Typography>
          <br/>
          <br/>
          <Button onClick={handleReset} className={classes.button}>
          {t("reset")}
          </Button>
        </Paper>
      )}
    </div>
  );

  
}