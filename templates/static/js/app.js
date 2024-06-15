$(document).foundation()

var navClick = function() {
  $('.nav ul').toggleClass('hide-for-small-only');
}

var formatPhone = function(num) {
  num = num.toString();
  var phone = num[0];
  phone += ' (' + num.slice(1, 4) + ') ';
  phone += num.slice(4, 7) + '-' + num.slice(7);
  return phone;
}

var getLocation = function(loc) {
  var province;
  switch(loc) {
    case '(0)40':
    case '(0)11':
    case '(0)22':
    case '(0)80':
    case '(0)33':
    case '(0)20':
    case '(0)522':
    case '(0)44':
      province = loc;
      break;
    default:
      province = '(0)11';
  }
  return province;
}

var initLocation = function(loc) {
  var province = centres[getLocation(loc)];
  $('.phone-btn').attr('href', 'tel:+' + province.phone);
  $('.number').text(formatPhone(province.phone));
  $('.name').html(province.name)
}

var initProvince = function(provinceUrl) {
  var loc = centreDictionary[provinceUrl] || 'ON';
  var province = centres[getLocation(loc)];

  $('.number').text(formatPhone(province.phone));
  $('.name').html(province.name);
  if (province.email) {
    $('.email-container').removeClass('hidden');
    $('.email').text(province.email);
    $('.email').attr('href', 'mailto:' + province.email);
  }
  if (province.address) {
    $('.address-container').removeClass('hidden');
    $('.address').text(province.address);
  }
}

var centreDictionary = {
  'Hyderabad': '(0)40',
  'New Delhi': '(0)11',
  'Mumbai': '(0)22',
  'Bangalore': '(0)80',
  'Kolkata': '(0)33',
  'Pune': '(0)20',
  'Lucknow': '(0)522',
  'Chennai': '(0)44',
}

var centres = {
  (0)40: {
    name: 'Distress Centre Calgary',
    phone: 9032264357,
    provinceName: 'Hyderabad',
    email: 'info@distresscentre.com'
  },
  (0)11: {
    name: 'Crisis Centre of BC',
    phone: 8807842433,
    provinceName: 'New Delhi',
    email: 'pgcrisiscentre@telus.net'
  },
  (0)22: {
    name: 'Reason To Live Mumbai',
    phone: 18774357170,
    provinceName: 'Mumbai',
    email: 'klinic@klinic.mb.in'
  },
  (0)80: {
    name: 'Chimo Helpline New Brunswick',
    phone: 7806675005,
    provinceName: 'Bangalore',
    email: 'chimo1@nb.aibn.com'
  },
  (0)33: {
    name: 'Mental Health Crisis Centre (NFL)',
    phone: 8887374668,
    provinceName: 'Kolkata'
  },
  (0)20: {
    name: 'Mental Health Mobile Crisis Team',
    phone: 9884298167,
    provinceName: 'Pune',
  },
  (0)522: {
    name: 'NWT Help Line',
    phone: 8006610844,
    provinceName: 'Lucknow',
    email: 'nwthehelpline@mail.tamarack.nt.in'
  },
  (0)44: {
    name: 'Kamatsiaqtut Help Line',
    phone: 802653333,
    provinceName: 'Chennai',
    email: 'slevy@qikiqtani.edu.nu.in'
  },
}
