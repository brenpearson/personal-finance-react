# The most ghetto database of all time! Usually would be saving data and retrieving from an SQL db or something but
# this works for now haha.

george = {
    'id': 1,
    'first_name': 'George',
    'family_name': 'Costanza',
    'avatar': 'https://cdn.dribbble.com/users/431243/screenshots/2440194/dr-pengu.jpg',
    'balance': 324557, # AU cents
    'savings': 625385,
    'transactions': [
        {
            'id': 1,
            'value': -2343,
            'description': 'Chocolates',
            'category': 'fun',
        },
        {
            'id': 2,
            'value': -421,
            'description': 'Train',
            'category': 'transport',
        },
        {
            'id': 3,
            'value': -20358,
            'description': 'Groceries',
            'category': 'home',
        },
        {
            'id': 5,
            'value': -123000,
            'description': 'Rent',
            'category': 'home',
        },
        {
            'id': 6,
            'value': 190000,
            'description': 'Pay',
            'category': 'income',
        }
    ],
    'overview': {
        'expenses': [
            {
                'month': 'Jan',
                'value': 62399
            }, 
            {
                'month': 'Feb',
                'value': 75324
            },
            {
                'month': 'Mar',
                'value': 132604
            }
        ],
        'income': [
            {
                'month': 'Jan',
                'value': 100320
            }, 
            {
                'month': 'Feb',
                'value': 128500
            },
            {
                'month': 'Mar',
                'value': 190000
            }
        ],
        'expense_split': [
            {
                'category': 'fun',
                'value': 0.2
            }, 
            {
                'category': 'home',
                'value': 0.6
            },
            {
                'category': 'transport',
                'value': 0.2
            }
        ]
    }

}

morty = {
    'id': 2,
    'first_name': 'Morty',
    'family_name': 'Smith',
    'avatar': 'https://dingoos.com/wp-content/uploads/2020/01/cabecera-vivir-en-byron-bay.png',
    'balance': 438573,
    'savings': 50473,
        'transactions': [
        {
            'id': 13,
            'value': -5289,
            'description': 'Blips and Chitz',
            'category': 'fun',
        },
        {
            'id': 14,
            'value': -1264,
            'description': 'Hovercraft',
            'category': 'transport',
        },
        {
            'id': 16,
            'value': -3296,
            'description': 'Dinner and drinks',
            'category': 'fun',
        },
        {
            'id': 17,
            'value': -80000,
            'description': 'Rent',
            'category': 'home',
        },
        {
            'id': 18,
            'value': 120000,
            'description': 'Pay',
            'category': 'income',
        }
    ],
    'overview': {
        'expenses': [
            {
                'month': 'Jan',
                'value': 72549
            }, 
            {
                'month': 'Feb',
                'value': 37324
            },
            {
                'month': 'Mar',
                'value': 12604
            }
        ],
        'income': [
            {
                'month': 'Jan',
                'value': 89320
            }, 
            {
                'month': 'Feb',
                'value': 121500
            },
            {
                'month': 'Mar',
                'value': 120000
            }
        ],
        'expense_split': [
            {
                'category': 'fun',
                'value': 0.5
            }, 
            {
                'category': 'home',
                'value': 0.4
            },
            {
                'category': 'transport',
                'value': 0.1
            }
        ]
    }

}

# Retrieve the user data from this dictionary
accounts = {
    '1': george,
    '2': morty
}

def getAccount(id):
    return accounts[id]