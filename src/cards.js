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
            image: 'assets/images/cat.png',
            audio: 'assets/audio/cat.mp3'
        },
        {
            word: 'horse',
            translation: 'лошадь',
            image: 'assets/images/horse.png',
            audio: 'assets/audio/horse.mp3'
        },
        {
            word: 'penguin',
            translation: 'пингвин',
            image: 'assets/images/penguin.png',
            audio: 'assets/audio/penguin.mp3'
        },
        {
            word: 'pig',
            translation: 'свинья',
            image: 'assets/images/pig.png',
            audio: 'assets/audio/pig.mp3'
        },
        {
            word: 'giraffe',
            translation: 'жираф',
            image: 'assets/images/giraffe.png',
            audio: 'assets/audio/giraffe.mp3'
        },
        {
            word: 'elephant',
            translation: 'слон',
            image: 'assets/images/elephant.png',
            audio: 'assets/audio/elephant.mp3'
        },
        {
            word: 'crocodile',
            translation: 'крокодил',
            image: 'assets/images/crocodile.png',
            audio: 'assets/audio/crocodile.mp3'
        },
        {
            word: 'cock',
            translation: 'петух',
            image: 'assets/images/cock.png',
            audio: 'assets/audio/cock.mp3'
        }
    ],
    [
        //emotions
        {
            word: 'calm',
            translation: 'спокойный',
            image: 'assets/images/calm.png',
            audio: 'assets/audio/calm.mp3'
        },
        {
            word: 'smile',
            translation: 'улыбка',
            image: 'assets/images/smile.png',
            audio: 'assets/audio/smile.mp3'
        },
        {
            word: 'happy',
            translation: 'счастливый',
            image: 'assets/images/happy.png',
            audio: 'assets/audio/happy.mp3'
        },
        {
            word: 'surprised',
            translation: 'удивленный',
            image: 'assets/images/surprised.png',
            audio: 'assets/audio/surprised.mp3'
        },
        {
            word: 'angry',
            translation: 'злой',
            image: 'assets/images/angry.png',
            audio: 'assets/audio/angry.mp3'
        },
        {
            word: 'fury',
            translation: 'ярость',
            image: 'assets/images/fury.png',
            audio: 'assets/audio/fury.mp3'
        },
        {
            word: 'cry',
            translation: 'плакать',
            image: 'assets/images/cry.png',
            audio: 'assets/audio/cry.mp3'
        },
        {
            word: 'scared',
            translation: 'напуган',
            image: 'assets/images/scared.png',
            audio: 'assets/audio/scared.mp3'
        }
    ],
    [
        //hobbies
        {
            word: 'cooking',
            translation: 'кулинария',
            image: 'assets/images/cooking.png',
            audio: 'assets/audio/cooking.mp3'
        },
        {
            word: 'football',
            translation: 'футбол',
            image: 'assets/images/football.png',
            audio: 'assets/audio/football.mp3'
        },
        {
            word: 'gymnastics',
            translation: 'гимнастика',
            image: 'assets/images/gymnastics.png',
            audio: 'assets/audio/gymnastics.mp3'
        },
        {
            word: 'music',
            translation: 'музыка',
            image: 'assets/images/music.png',
            audio: 'assets/audio/music.mp3'
        },
        {
            word: 'painting',
            translation: 'рисование',
            image: 'assets/images/painting.png',
            audio: 'assets/audio/painting.mp3'
        },
        {
            word: 'reading',
            translation: 'чтение',
            image: 'assets/images/reading.png',
            audio: 'assets/audio/reading.mp3'
        },
        {
            word: 'science',
            translation: 'наука',
            image: 'assets/images/science.png',
            audio: 'assets/audio/science.mp3'
        },
        {
            word: 'singing',
            translation: 'пение',
            image: 'assets/images/singing.png',
            audio: 'assets/audio/singing.mp3'
        }
    ],
    [
        //family
        {
            word: 'grandfather',
            translation: 'дедушка',
            image: 'assets/images/grandfather.png',
            audio: 'assets/audio/grandfather.mp3'
        },
        {
            word: 'grandmother',
            translation: 'бабушка',
            image: 'assets/images/grandmother.png',
            audio: 'assets/audio/grandmother.mp3'
        },
        {
            word: 'father',
            translation: 'папа',
            image: 'assets/images/father.png',
            audio: 'assets/audio/father.mp3'
        },
        {
            word: 'mother',
            translation: 'мама',
            image: 'assets/images/mother.png',
            audio: 'assets/audio/mother.mp3'
        },
        {
            word: 'son',
            translation: 'сын',
            image: 'assets/images/son.png',
            audio: 'assets/audio/son.mp3'
        },
        {
            word: 'daughter',
            translation: 'дочь',
            image: 'assets/images/daughter.png',
            audio: 'assets/audio/daughter.mp3'
        },
        {
            word: 'baby',
            translation: 'малыш',
            image: 'assets/images/baby.png',
            audio: 'assets/audio/baby.mp3'
        },
        {
            word: 'pet',
            translation: 'питомец',
            image: 'assets/images/pet.png',
            audio: 'assets/audio/pet.mp3'
        }
    ],
    [
        //food
        {
            word: 'burger',
            translation: 'бургер',
            image: 'assets/images/burger.png',
            audio: 'assets/audio/burger.mp3'
        },
        {
            word: 'chicken',
            translation: 'курица',
            image: 'assets/images/chicken.png',
            audio: 'assets/audio/chicken.mp3'
        },
        {
            word: 'fries',
            translation: 'картофель фри',
            image: 'assets/images/fries.png',
            audio: 'assets/audio/fries.mp3'
        },
        {
            word: 'hot dog',
            translation: 'хот дог',
            image: 'assets/images/hot-dog.png',
            audio: 'assets/audio/hot-dog.mp3'
        },
        {
            word: 'pasta',
            translation: 'паста',
            image: 'assets/images/pasta.png',
            audio: 'assets/audio/pasta.mp3'
        },
        {
            word: 'salad',
            translation: 'салат',
            image: 'assets/images/salad.png',
            audio: 'assets/audio/salad.mp3'
        },
        {
            word: 'sandwich',
            translation: 'бутерброд',
            image: 'assets/images/sandwich.png',
            audio: 'assets/audio/sandwich.mp3'
        },
        {
            word: 'sausage',
            translation: 'колбаса',
            image: 'assets/images/sausage.png',
            audio: 'assets/audio/sausage.mp3'
        }
    ],
    [
        //vegetables
        {
            word: 'broccoli',
            translation: 'брокколи',
            image: 'assets/images/broccoli.png',
            audio: 'assets/audio/broccoli.mp3'
        },
        {
            word: 'cabbage',
            translation: 'капуста',
            image: 'assets/images/cabbage.png',
            audio: 'assets/audio/cabbage.mp3'
        },
        {
            word: 'carrot',
            translation: 'морковь',
            image: 'assets/images/carrot.png',
            audio: 'assets/audio/carrot.mp3'
        },
        {
            word: 'corn',
            translation: 'кукуруза',
            image: 'assets/images/corn.png',
            audio: 'assets/audio/corn.mp3'
        },
        {
            word: 'eggplant',
            translation: 'баклажан',
            image: 'assets/images/eggplant.png',
            audio: 'assets/audio/eggplant.mp3'
        },
        {
            word: 'garlic',
            translation: 'чеснок',
            image: 'assets/images/garlic.png',
            audio: 'assets/audio/garlic.mp3'
        },
        {
            word: 'potato',
            translation: 'картофель',
            image: 'assets/images/potato.png',
            audio: 'assets/audio/potato.mp3'
        },
        {
            word: 'radish',
            translation: 'редиска',
            image: 'assets/images/radish.png',
            audio: 'assets/audio/radish.mp3'
        }
    ],
    [
        //fruits
        {
            word: 'banana',
            translation: 'банан',
            image: 'assets/images/banana.png',
            audio: 'assets/audio/banana.mp3'
        },
        {
            word: 'cherry',
            translation: 'вишня',
            image: 'assets/images/cherry.png',
            audio: 'assets/audio/cherry.mp3'
        },
        {
            word: 'grape',
            translation: 'виноград',
            image: 'assets/images/grape.png',
            audio: 'assets/audio/grape.mp3'
        },
        {
            word: 'mango',
            translation: 'манго',
            image: 'assets/images/mango.png',
            audio: 'assets/audio/mango.mp3'
        },
        {
            word: 'peach',
            translation: 'персик',
            image: 'assets/images/peach.png',
            audio: 'assets/audio/peach.mp3'
        },
        {
            word: 'pineapple',
            translation: 'ананас',
            image: 'assets/images/pineapple.png',
            audio: 'assets/audio/pineapple.mp3'
        },
        {
            word: 'pomegranate',
            translation: 'гранат',
            image: 'assets/images/pomegranate.png',
            audio: 'assets/audio/pomegranate.mp3'
        },
        {
            word: 'raspberry',
            translation: 'малина',
            image: 'assets/images/raspberry.png',
            audio: 'assets/audio/raspberry.mp3'
        }
    ],
    [
        //colors
        {
            word: 'blue',
            translation: 'голубой',
            image: 'assets/images/blue.png',
            audio: 'assets/audio/blue.mp3'
        },
        {
            word: 'brown',
            translation: 'коричневый',
            image: 'assets/images/brown.png',
            audio: 'assets/audio/brown.mp3'
        },
        {
            word: 'blue',
            translation: 'синий',
            image: 'assets/images/blue.png',
            audio: 'assets/audio/blue.mp3'
        },
        {
            word: 'green',
            translation: 'зеленый',
            image: 'assets/images/green.png',
            audio: 'assets/audio/green.mp3'
        },
        {
            word: 'orange',
            translation: 'оранжевый',
            image: 'assets/images/orange.png',
            audio: 'assets/audio/orange.mp3'
        },
        {
            word: 'purple',
            translation: 'фиолетовый',
            image: 'assets/images/purple.png',
            audio: 'assets/audio/purple.mp3'
        },
        {
            word: 'red',
            translation: 'красный',
            image: 'assets/images/red.png',
            audio: 'assets/audio/red.mp3'
        },
        {
            word: 'yellow',
            translation: 'желтый',
            image: 'assets/images/yellow.png',
            audio: 'assets/audio/yellow.mp3'
        }
    ],
]

export default cards;