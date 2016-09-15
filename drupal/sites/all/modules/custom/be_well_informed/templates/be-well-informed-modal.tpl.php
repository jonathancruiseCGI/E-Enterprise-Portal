<div class="usa-grid-full">
  <h1>Be Well Informed > Enter Your Water Analysis Results</h1>
  <?php

  $unit_types = [
    'mg/L',
    'μg/L',
    'ppm',
    'ppb',
    'gpg',
    'units',
    'CFU/100 mL',
    'MPN/100 mL',
    'mpn_100_ml'
  ];

  $water_components = [
    [
      'name' => 'Arsenic',
      'machine_name' => 'arsenic',
      'symbol' => 'As',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'μg/L', 'ppm', 'ppb']
    ],
    [
      'name' => 'Lead',
      'machine_name' => 'lead',
      'symbol' => 'Pb',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'ppm']
    ],
    [
      'name' => 'Chloride',
      'machine_name' => 'chloride',
      'symbol' => 'Cl',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'μg/L', 'ppm', 'ppb']
    ],
    [
      'name' => 'Lead, Stagnant',
      'machine_name' => 'leadst',
      'symbol' => 'Cl',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'ppm']
    ],
    [
      'name' => 'Copper',
      'machine_name' => 'copper',
      'symbol' => 'Cu',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'ppm']
    ],
    [
      'name' => 'Manganese',
      'machine_name' => 'manganese',
      'symbol' => 'Mn',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'ppm']
    ],
    [
      'name' => 'Copper, Stagnant',
      'machine_name' => 'copperst',
      'symbol' => 'Cu',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'ppm']
    ],
    [
      'name' => 'Nitrate-N',
      'machine_name' => 'nitrate',
      'symbol' => 'NO3',
      'symbol_text' => 'NO<span class="sub">3</span>',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'ppm']
    ],
    [
      'name' => 'Fluoride',
      'machine_name' => 'fluoride',
      'symbol' => 'F',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'ppm']
    ],
    [
      'name' => 'Nitrite-N',
      'machine_name' => 'nitrite',
      'symbol' => 'NO2',
      'symbol_text' => 'NO<span class="sub">2</span>',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'ppm']
    ],
    [
      'name' => 'Hardness as CaCO3',
      'machine_name' => 'hardness',
      'symbol' => 'CaCO3',
      'symbol_test' => 'CaCO<span class="sub">3</span>',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'ppm', 'gpg']
    ],
    [
      'name' => 'pH',
      'machine_name' => 'ph',
      'symbol' => 'ph',
      'default_unit_type' => 'unit',
      'validation' => ['required'],
      'unit_types' => ['units']
    ],
    [
      'name' => 'Iron',
      'machine_name' => 'iron',
      'symbol' => 'Cl',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'ppm']
    ],
    [
      'name' => 'Sodium',
      'machine_name' => 'sodium',
      'symbol' => 'na',
      'default_unit_type' => 'mg/L',
      'validation' => ['required'],
      'unit_types' => ['mg/L', 'ppm']
    ]
  ];

  $microbiology = [
    [
      'name' => 'Total Coliform',
      'machine_name' => 'totalcoliform',
      'default_unit_type' => 'CFU/100 mL',
      'validation' => ['required'],
      'unit_types' => ['CFU/100 mL', 'MPN/100 mL'],
      'radio_name' => 'Bac',
    ],
    [
      'name' => 'E. Coli',
      'machine_name' => 'ecolibacteria',
      'default_unit_type' => 'CFU/100 mL',
      'validation' => ['required'],
      'unit_types' => ['CFU/100 mL', 'MPN/100 mL'],
      'radio_name' => 'Ecoli',
    ],
  ];

  $radionuclides = [
    [
      'name' => 'Radon',
      'machine_name' => 'radon',
      'symbol' => 'na',
      'default_unit_type' => 'pCi/L',
      'validation' => ['required'],
      'unit_types' => ['pCi/L']
    ],
    [
      'name' => 'Uranium',
      'machine_name' => 'uranium',
      'symbol' => 'U',
      'default_unit_type' => 'μg/L',
      'validation' => ['required'],
      'unit_types' => ['pCi/L', 'μg/L']
    ],
    [
      'name' => 'Gross Alpha',
      'machine_name' => 'grossalpha',
      'symbol' => '',
      'default_unit_type' => 'pCi/L',
      'validation' => ['required'],
      'unit_types' => ['pCi/L']
    ],
  ];

  $cities = [
    "Anonymous",
    "New England",
    "Acworth",
    "Albany",
    "Alexandria",
    "Allenstown",
    "Alstead",
    "Amherst",
    "Andover",
    "Antrim",
    "Ashland",
    "Atkinson",
    "Auburn",
    "Barnstead",
    "Barrington",
    "Bartlett",
    "Bath",
    "Bedford",
    "Belmont",
    "Bennington",
    "Benton",
    "Berlin",
    "Bethlehem",
    "Boscawen",
    "Bow",
    "Bradford",
    "Brentwood",
    "Bridgewater",
    "Bristol",
    "Brookfield",
    "Brookline",
    "Campton",
    "Canaan",
    "Candia",
    "Canterbury",
    "Carroll",
    "Center Harbor",
    "Charlestown",
    "Chatham",
    "Chester",
    "Chesterfield",
    "Chichester",
    "Claremont",
    "Clarksville",
    "Colebrook",
    "Columbia",
    "Concord",
    "Conway",
    "Cornish",
    "Croydon",
    "Dalton",
    "Danbury",
    "Danville",
    "Deerfield",
    "Deering",
    "Derry",
    "Dixville",
    "Dorchester",
    "Dover",
    "Dublin",
    "Dummer",
    "Dunbarton",
    "Durham",
    "East Kingston",
    "Easton",
    "Eaton",
    "Effingham",
    "Ellsworth",
    "Enfield",
    "Epping",
    "Epsom",
    "Errol",
    "Exeter",
    "Farmington",
    "Fitzwilliam",
    "Francestown",
    "Franconia",
    "Franklin",
    "Freedom",
    "Fremont",
    "Gilford",
    "Gilmanton",
    "Gilsum",
    "Goffstown",
    "Gorham",
    "Goshen",
    "Grafton",
    "Grantham",
    "Greenfield",
    "Greenland",
    "Greenville",
    "Groton",
    "Hampstead",
    "Hampton",
    "Hampton Falls",
    "Hancock",
    "Hanover",
    "Harrisville",
    "Hart's Location",
    "Haverhill",
    "Hebron",
    "Henniker",
    "Hill",
    "Hillsborough",
    "Hinsdale",
    "Holderness",
    "Hollis",
    "Hooksett",
    "Hopkinton",
    "Hudson",
    "Jackson",
    "Jaffrey",
    "Jefferson",
    "Keene",
    "Kensington",
    "Kingston",
    "Laconia",
    "Lancaster",
    "Landaff",
    "Langdon",
    "Lebanon",
    "Lee",
    "Lempster",
    "Lincoln",
    "Lisbon",
    "Litchfield",
    "Littleton",
    "Londonderry",
    "Loudon",
    "Lyman",
    "Lyme",
    "Lyndeborough",
    "Madbury",
    "Madison",
    "Manchester",
    "Marlborough",
    "Marlow",
    "Mason",
    "Meredith",
    "Merrimack",
    "Middleton",
    "Milan",
    "Milford",
    "Milton",
    "Monroe",
    "Mont Vernon",
    "Moultonborough",
    "Nashua",
    "Nelson",
    "New Boston",
    "Newbury",
    "New Castle",
    "New Durham",
    "Newfields",
    "New Hampton",
    "Newington",
    "New Ipswich",
    "New London",
    "Newmarket",
    "Newport",
    "Newton",
    "Northfield",
    "North Hampton",
    "Northumberland",
    "Northwood",
    "Orange",
    "Orford",
    "Ossipee",
    "Pelham",
    "Pembroke",
    "Peterborough",
    "Piermont",
    "Pittsburg",
    "Pittsfield",
    "Plainfield",
    "Plaistow",
    "Plymouth",
    "Portsmouth",
    "Randolph",
    "Raymond",
    "Richmond",
    "Rindge",
    "Rochester",
    "Rollinsford",
    "Roxbury",
    "Rumney",
    "Rye",
    "Salem",
    "Salisbury",
    "Sanbornton",
    "Sandown",
    "Sandwich",
    "Seabrook",
    "Sharon",
    "Shelburne",
    "Somersworth",
    "South Hampton",
    "Springfield",
    "Stark",
    "Stewartstown",
    "Stoddard",
    "Strafford",
    "Stratham",
    "Sugar Hill",
    "Sullivan",
    "Sunapee",
    "Surry",
    "Sutton",
    "Swanzey",
    "Tamworth",
    "Temple",
    "Thornton",
    "Tilton",
    "Troy",
    "Tuftonboro",
    "Unity",
    "Wakefield",
    "Walpole",
    "Warner",
    "Warren",
    "Washington",
    "Waterville Valley",
    "Weare",
    "Webster",
    "Wentworth",
    "West Chesterfield",
    "Westmoreland",
    "Whitefield",
    "Wilmot",
    "Wilton",
    "Winchester",
    "Windham",
    "Windsor",
    "Wolfeboro",
    "Woodstock"
  ];

  $prefix = 'ct100$MainContent$';

  ?>
  <div class="bs-callout bs-callout-warning hidden">
    <h4>Please correct the errors below:</h4>
  </div>

  <div class="bs-callout bs-callout-info hidden">
    <h4>Everything appears valid</h4>
  </div>

  <form action="" id="water_analysis_results_form">
    <div class="row usa-grid-full">
      <div class="row usa-width-one-whole">
        <div class="city-selection section usa-width-one-half">
          <label class="column one-half"
                 for="<?php echo $prefix . 'drp' ?>city">New Hampshire / City
            -<span class="red"> Required</span></label>
          <select class="column one-half right"
                  name="<?php echo $prefix . 'drp' ?>city" id="drpcity"
                  required="">
            <option value="">Select a City</option>
            <?php foreach ($cities as $c): ?>
              <option value="<?php echo $c ?>"><?php echo $c ?></option>
            <?php endforeach; ?>
          </select>
        </div>
      </div>
      <div class="components usa-width-one-half">
        <h3>Routine Water Analysis</h3>
        <?php foreach ($water_components as $wc): ?>
          <div class="row section">
            <label class="column one-third"
                   for="<?php echo $prefix . 'txt' . $wc['machine_name'] ?>"><?php echo $wc['name'] ?>
              <span
                class="symbol">(<?php echo ($wc['symbol_text']) ? $wc['symbol_text'] : $wc['symbol'] ?>
                )</span></label>
            <input class="column one-third"
                   name="<?php echo $prefix . 'txt' . $wc['machine_name'] ?>"
                   type="number"
                   id="txt<?php echo $wc['machine_name'] ?>" <?php if (in_array('required', $wc['validation'])): {
              echo 'required=""';
            } endif; ?>>
            <select class="column one-third"
                    name="<?php echo $prefix . 'ddl' . $wc['machine_name'] ?>"
                    id="ddl<?php echo $wc['machine_name'] ?>">
              <?php foreach ($wc['unit_types'] as $ut): ?>
                <option
                  value="<?php echo $ut ?>" <?php if ($wc['default_unit_type'] == $ut): {
                  echo 'selected';
                } endif; ?>> <?php echo $ut ?></option>
              <?php endforeach; ?>
            </select>
          </div>
        <?php endforeach; ?>
      </div>
      <div class="usa-width-one-half">
        <div class="microbiology">
          <h3>Bacteria / Microbiology</h3>
          <?php foreach ($microbiology as $m): ?>
            <div class="row section">
              <div <?php if (in_array('required', $m['validation'])): {
                echo 'data-parsley-check-children="2" data-parsley-validate-if-empty=""';
              } endif; ?>>
                <label class="column one-third"
                       for="<?php echo $prefix . 'txt' . $m['machine_name'] ?>"><?php echo $m['name'] ?></label>
                <input class="column one-third"
                       name="<?php echo $prefix . 'txt' . $m['machine_name'] ?>"
                       type="number"
                       id="txt<?php echo $m['machine_name'] ?>" <?php if (in_array('required', $m['validation'])): {
                  echo 'data-parsley-group="block-1"';
                } endif; ?>>
                <select class="column one-third"
                        name="<?php echo $prefix . 'ddl' . $m['machine_name'] ?>"
                        id="ddl<?php echo $m['machine_name'] ?>">
                  <?php foreach ($m['unit_types'] as $ut): ?>
                    <option
                      value="<?php echo $ut ?>" <?php if ($m['default_unit_type'] == $ut): {
                      echo 'selected';
                    } endif; ?>> <?php echo $ut ?></option>
                  <?php endforeach; ?>
                </select>
                <div class="row absent-present">
                  <span class="column">Or Choose: </span>
                  <div class="column">
                    <input name="<?php echo $prefix . $m['radio_name'] ?>_G"
                           type="radio"
                           id="rdb_<?php echo $m['radio_name'] ?>_True"
                           value="rdb_<?php echo $m['machine_name'] ?>_True" <?php if (in_array('required', $m['validation'])): {
                      echo 'data-parsley-multiple="' . $m['machine_name'] . '" data-parsley-group="block-2"';
                    } endif; ?>>
                    <label
                      for="rdb_<?php echo $m['radio_name'] ?>_True">Present</label>
                    <input name="<?php echo $prefix . $m['radio_name'] ?>_G"
                           type="radio"
                           id="rdb_<?php echo $m['radio_name'] ?>_False"
                           value="rdb_<?php echo $m['machine_name'] ?>_False" <?php if (in_array('required', $m['validation'])): {
                      echo 'data-parsley-multiple="' . $m['machine_name'] . '" data-parsley-group="block-2"';
                    } endif; ?>>
                    <label
                      for="rdb_<?php echo $m['radio_name'] ?>_False">Absent</label>
                  </div>
                </div>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
        <div class="radionuclides">
          <h3>Radionuclides</h3>
          <?php foreach ($radionuclides as $rn): ?>
            <div class="row section">
              <label class="column one-third"
                     for="<?php echo $prefix . 'txt' . $rn['machine_name'] ?>"><?php echo $rn['name'] ?> <?php if ($rn['symbol_text'] || $rn['symbol']): ?>
                  <span class="symbol">
                  (<?php echo ($rn['symbol_text']) ? $rn['symbol_text'] : $rn['symbol'] ?>
                  )</span><?php endif; ?></label>
              <input class="column one-third"
                     name="<?php echo $prefix . 'txt' . $rn['machine_name'] ?>"
                     type="number"
                     id="txt<?php echo $rn['machine_name'] ?>" <?php if (in_array('required', $rn['validation'])): {
                echo 'required=""';
              } endif; ?>>
              <select class="column one-third"
                      name="<?php echo $prefix . 'ddl' . $rn['machine_name'] ?>"
                      id="ddl<?php echo $rn['machine_name'] ?>">
                <?php foreach ($rn['unit_types'] as $ut): ?>
                  <option
                    value="<?php echo $ut ?>" <?php if ($rn['default_unit_type'] == $ut): {
                    echo 'selected';
                  } endif; ?>> <?php echo $ut ?></option>
                <?php endforeach; ?>
              </select>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
    <div class="row usa-width-one-whole reset-submit">
      <div class="column right">
        <button id="water_analysis_reset" class="usa-button-primary-alt">Reset
        </button>
        <button id="water_analysis_submit" class="usa-button-primary">Submit
        </button>
      </div>
    </div>
  </form>
</div>
