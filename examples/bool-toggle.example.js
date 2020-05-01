import boolToggle from '../src/bool-toggle'

boolToggle(true)
//=> false

boolToggle(false)
//=> true

let bool = false

bool = boolToggle(bool)

bool === true
//=> true

bool = boolToggle(bool)

bool === false
//=> true
