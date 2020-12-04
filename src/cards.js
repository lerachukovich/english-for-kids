const cards = [
    ['Weather', 'Animals', 'Emotions', 'Hobbies', 'Family', 'Food', 'Vegetables', 'Fruits', 'Colors'],
    [
        //weather
        {
            word: 'rain',
            translation: 'дождь',
            image: 'assets/images/rain.png',
            audio: 'assets/audio/rain.mp3'
        },
        {
            word: 'cloud',
            translation: 'облако',
            image: 'assets/images/cloud.png',
            audio: 'assets/audio/cloud.mp3'
        },
        {
            word: 'hurricane',
            translation: 'ураган',
            image: 'assets/images/hurricane.png',
            audio: 'assets/audio/hurricane.mp3'
        },
        {
            word: 'rainbow',
            translation: 'радуга',
            image: 'assets/images/rainbow.png',
            audio: 'assets/audio/rainbow.mp3'
        },
        {
            word: 'snow',
            translation: 'снег',
            image: 'assets/images/snow.png',
            audio: 'assets/audio/snow.mp3'
        },
        {
            word: 'storm',
            translation: 'гроза',
            image: 'assets/images/storm.png',
            audio: 'assets/audio/storm.mp3'
        },
        {
            word: 'sun',
            translation: 'солнце',
            image: 'assets/images/sun.png',
            audio: 'assets/audio/sun.mp3'
        },
        {
            word: 'wind',
            translation: 'ветер',
            image: 'assets/images/wind.png',
            audio: 'assets/audio/wind.mp3'
        }
    ],
    [
        //animals
        {
            word: 'cat',
            translation: 'кот',
            image: '.src/assets/images/cat.png',
            audio: '.src/assets/audio/cat.mp3'
        },
        {
            word: 'horse',
            translation: 'лошадь',
            image: '.src/assets/images/horse.png',
            audio: '.src/assets/audio/horse.mp3'
        },
        {
            word: 'penguin',
            translation: 'пингвин',
            image: '.src/assets/images/penguin.png',
            audio: '.src/assets/audio/penguin.mp3'
        },
        {
            word: 'pig',
            translation: 'свинья',
            image: '.src/assets/images/pig.png',
            audio: '.src/assets/audio/pig.mp3'
        },
        {
            word: 'giraffe',
            translation: 'жираф',
            image: '.src/assets/images/giraffe.png',
            audio: '.src/assets/audio/giraffe.mp3'
        },
        {
            word: 'elephant',
            translation: 'слон',
            image: '.src/assets/images/elephant.png',
            audio: '.src/assets/audio/elephant.mp3'
        },
        {
            word: 'crocodile',
            translation: 'крокодил',
            image: '.src/assets/images/crocodile.png',
            audio: '.src/assets/audio/crocodile.mp3'
        },
        {
            word: 'cock',
            translation: 'петух',
            image: '.src/assets/images/cock.png',
            audio: '.src/assets/audio/cock.mp3'
        }
    ],
    [
        //emotions
        {
            word: 'calm',
            translation: 'спокойный',
            image: '.src/assets/images/calm.png',
            audio: '.src/assets/audio/calm.mp3'
        },
        {
            word: 'smile',
            translation: 'улыбка',
            image: '.src/assets/images/smile.png',
            audio: '.src/assets/audio/smile.mp3'
        },
        {
            word: 'happy',
            translation: 'счастливый',
            image: '.src/assets/images/happy.png',
            audio: '.src/assets/audio/happy.mp3'
        },
        {
            word: 'surprised',
            translation: 'удивленный',
            image: '.src/assets/images/surprised.png',
            audio: '.src/assets/audio/surprised.mp3'
        },
        {
            word: 'angry',
            translation: 'злой',
            image: '.src/assets/images/angry.png',
            audio: '.src/assets/audio/angry.mp3'
        },
        {
            word: 'fury',
            translation: 'ярость',
            image: '.src/assets/images/fury.png',
            audio: '.src/assets/audio/fury.mp3'
        },
        {
            word: 'cry',
            translation: 'плакать',
            image: '.src/assets/images/cry.png',
            audio: '.src/assets/audio/cry.mp3'
        },
        {
            word: 'scared',
            translation: 'напуган',
            image: '.src/assets/images/scared.png',
            audio: '.src/assets/audio/scared.mp3'
        }
    ],
    [
        //hobbies
        {
            word: 'cooking',
            translation: 'кулинария',
            image: '.src/assets/images/cooking.png',
            audio: '.src/assets/audio/cooking.mp3'
        },
        {
            word: 'football',
            translation: 'футбол',
            image: '.src/assets/images/football.png',
            audio: '.src/assets/audio/football.mp3'
        },
        {
            word: 'gymnastics',
            translation: 'гимнастика',
            image: '.src/assets/images/gymnastics.png',
            audio: '.src/assets/audio/gymnastics.mp3'
        },
        {
            word: 'music',
            translation: 'музыка',
            image: '.src/assets/images/music.png',
            audio: '.src/assets/audio/music.mp3'
        },
        {
            word: 'painting',
            translation: 'рисование',
            image: '.src/assets/images/painting.png',
            audio: '.src/assets/audio/painting.mp3'
        },
        {
            word: 'reading',
            translation: 'чтение',
            image: '.src/assets/images/reading.png',
            audio: '.src/assets/audio/reading.mp3'
        },
        {
            word: 'science',
            translation: 'наука',
            image: '.src/assets/images/science.png',
            audio: '.src/assets/audio/science.mp3'
        },
        {
            word: 'singing',
            translation: 'пение',
            image: '.src/assets/images/singing.png',
            audio: '.src/assets/audio/singing.mp3'
        }
    ],
    [
        //family
        {
            word: 'grandfather',
            translation: 'дедушка',
            image: '.src/assets/images/grandfather.png',
            audio: '.src/assets/audio/grandfather.mp3'
        },
        {
            word: 'grandmother',
            translation: 'бабушка',
            image: '.src/assets/images/grandmother.png',
            audio: '.src/assets/audio/grandmother.mp3'
        },
        {
            word: 'father',
            translation: 'папа',
            image: '.src/assets/images/father.png',
            audio: '.src/assets/audio/father.mp3'
        },
        {
            word: 'mother',
            translation: 'мама',
            image: '.src/assets/images/mother.png',
            audio: '.src/assets/audio/mother.mp3'
        },
        {
            word: 'son',
            translation: 'сын',
            image: '.src/assets/images/son.png',
            audio: '.src/assets/audio/son.mp3'
        },
        {
            word: 'daughter',
            translation: 'дочь',
            image: '.src/assets/images/daughter.png',
            audio: '.src/assets/audio/daughter.mp3'
        },
        {
            word: 'baby',
            translation: 'малыш',
            image: '.src/assets/images/baby.png',
            audio: '.src/assets/audio/baby.mp3'
        },
        {
            word: 'pet',
            translation: 'питомец',
            image: '.src/assets/images/pet.png',
            audio: '.src/assets/audio/pet.mp3'
        }
    ],
    [
        //food
        {
            word: 'burger',
            translation: 'бургер',
            image: '.src/assets/images/burger.png',
            audio: '.src/assets/audio/burger.mp3'
        },
        {
            word: 'chicken',
            translation: 'курица',
            image: '.src/assets/images/chicken.png',
            audio: '.src/assets/audio/chicken.mp3'
        },
        {
            word: 'fries',
            translation: 'картофель фри',
            image: '.src/assets/images/fries.png',
            audio: '.src/assets/audio/fries.mp3'
        },
        {
            word: 'hot dog',
            translation: 'хот дог',
            image: '.src/assets/images/hot-dog.png',
            audio: '.src/assets/audio/hot-dog.mp3'
        },
        {
            word: 'pasta',
            translation: 'паста',
            image: '.src/assets/images/pasta.png',
            audio: '.src/assets/audio/pasta.mp3'
        },
        {
            word: 'salad',
            translation: 'салат',
            image: '.src/assets/images/salad.png',
            audio: '.src/assets/audio/salad.mp3'
        },
        {
            word: 'sandwich',
            translation: 'бутерброд',
            image: '.src/assets/images/sandwich.png',
            audio: '.src/assets/audio/sandwich.mp3'
        },
        {
            word: 'sausage',
            translation: 'колбаса',
            image: '.src/assets/images/sausage.png',
            audio: '.src/assets/audio/sausage.mp3'
        }
    ],
    [
        //vegetables
        {
            word: 'broccoli',
            translation: 'брокколи',
            image: '.src/assets/images/broccoli.png',
            audio: '.src/assets/audio/broccoli.mp3'
        },
        {
            word: 'cabbage',
            translation: 'капуста',
            image: '.src/assets/images/cabbage.png',
            audio: '.src/assets/audio/cabbage.mp3'
        },
        {
            word: 'carrot',
            translation: 'морковь',
            image: '.src/assets/images/carrot.png',
            audio: '.src/assets/audio/carrot.mp3'
        },
        {
            word: 'corn',
            translation: 'кукуруза',
            image: '.src/assets/images/corn.png',
            audio: '.src/assets/audio/corn.mp3'
        },
        {
            word: 'eggplant',
            translation: 'баклажан',
            image: '.src/assets/images/eggplant.png',
            audio: '.src/assets/audio/eggplant.mp3'
        },
        {
            word: 'garlic',
            translation: 'чеснок',
            image: '.src/assets/images/garlic.png',
            audio: '.src/assets/audio/garlic.mp3'
        },
        {
            word: 'potato',
            translation: 'картофель',
            image: '.src/assets/images/potato.png',
            audio: '.src/assets/audio/potato.mp3'
        },
        {
            word: 'radish',
            translation: 'редиска',
            image: '.src/assets/images/radish.png',
            audio: '.src/assets/audio/radish.mp3'
        }
    ],
    [
        //fruits
        {
            word: 'banana',
            translation: 'банан',
            image: '.src/assets/images/banana.png',
            audio: '.src/assets/audio/banana.mp3'
        },
        {
            word: 'cherry',
            translation: 'вишня',
            image: '.src/assets/images/cherry.png',
            audio: '.src/assets/audio/cherry.mp3'
        },
        {
            word: 'grape',
            translation: 'виноград',
            image: '.src/assets/images/grape.png',
            audio: '.src/assets/audio/grape.mp3'
        },
        {
            word: 'mango',
            translation: 'манго',
            image: '.src/assets/images/mango.png',
            audio: '.src/assets/audio/mango.mp3'
        },
        {
            word: 'peach',
            translation: 'персик',
            image: '.src/assets/images/peach.png',
            audio: '.src/assets/audio/peach.mp3'
        },
        {
            word: 'pineapple',
            translation: 'ананас',
            image: '.src/assets/images/pineapple.png',
            audio: '.src/assets/audio/pineapple.mp3'
        },
        {
            word: 'pomegranate',
            translation: 'гранат',
            image: '.src/assets/images/pomegranate.png',
            audio: '.src/assets/audio/pomegranate.mp3'
        },
        {
            word: 'raspberry',
            translation: 'малина',
            image: '.src/assets/images/raspberry.png',
            audio: '.src/assets/audio/raspberry.mp3'
        }
    ],
    [
        //colors
        {
            word: 'blue',
            translation: 'голубой',
            image: '.src/assets/images/blue.png',
            audio: '.src/assets/audio/blue.mp3'
        },
        {
            word: 'brown',
            translation: 'коричневый',
            image: '.src/assets/images/brown.png',
            audio: '.src/assets/audio/brown.mp3'
        },
        {
            word: 'blue',
            translation: 'синий',
            image: '.src/assets/images/blue.png',
            audio: '.src/assets/audio/blue.mp3'
        },
        {
            word: 'green',
            translation: 'зеленый',
            image: '.src/assets/images/green.png',
            audio: '.src/assets/audio/green.mp3'
        },
        {
            word: 'orange',
            translation: 'оранжевый',
            image: '.src/assets/images/orange.png',
            audio: '.src/assets/audio/orange.mp3'
        },
        {
            word: 'purple',
            translation: 'фиолетовый',
            image: '.src/assets/images/purple.png',
            audio: '.src/assets/audio/purple.mp3'
        },
        {
            word: 'red',
            translation: 'красный',
            image: '.src/assets/images/red.png',
            audio: '.src/assets/audio/red.mp3'
        },
        {
            word: 'yellow',
            translation: 'желтый',
            image: '.src/assets/images/yellow.png',
            audio: '.src/assets/audio/yellow.mp3'
        }
    ],
]

export default cards;