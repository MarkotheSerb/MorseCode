var input = document.querySelector('.input');
var button = document.querySelector('.button');
var output = document.querySelector('.output');

button.addEventListener('click', function() {

    input.value += ' ';
    var inputValue = input.value;
    var englishText = '';

    var i;

    for (i = 0; i < inputValue.length; i++) {
      if((inputValue[i] != inputValue[0]) && inputValue[i - 1] == ' '  ) {
        if ((inputValue[i] == '.')) {
            if (inputValue[i + 1] == ' ') {
                englishText += 'e'
            } else if (inputValue[i + 1] == '.') {
                if (inputValue[i + 2] == ' ') {
                    englishText += 'i'
                } else if (inputValue[i + 2] == '.') {
                    if (inputValue[i +3] == ' ') {
                        englishText += 's'
                    } else if (inputValue[i +3] == '.') {
                        if(inputValue[i+ 4] == ' ') {
                            englishText += 'h'
                        } else if (inputValue[i +4] == '.') {
                            if (inputValue[i +5] == ' ') {
                                englishText += '5'
                            }
                        } else if (inputValue[i + 4] == '-') {
                            if (inputValue[i + 5] == ' ') {
                                englishText += '4'
                            }
                        }
                    } else if (inputValue[i + 3] == '-') {
                        if (inputValue[i + 4] == ' ') {
                            englishText += 'v'
                        } else if (inputValue[i + 4] == '-') {
                            if (inputValue[i + 5] == ' ') {
                                englishText += '3'
                            }
                        }
                    }
                } else if (inputValue[i + 2] == '-') {
                    if(inputValue[i + 3] == ' ') {
                        englishText += 'u'
                    } else if (inputValue[i + 3] == '-') {
                        if (inputValue[i + 4] == '-') {
                            if (inputValue[i + 5] == ' ') {
                                englishText += '2'
                            }
                        }
                    } else if (inputValue[i + 3] == '.') {
                        if (inputValue[i + 4] == ' ') {
                            englishText += 'f'
                        }
                    }
                } 
            } else if (inputValue[i+1] == "-") {
                if(inputValue[i+2] == ' ') {
                    englishText += 'a'
                } else if (inputValue[i+2] == '-') {
                    if (inputValue[i + 3] == ' ') {
                        englishText += 'w'
                    } else if (inputValue[i + 3] == '.'){
                        if(inputValue[i + 4] == ' ') {
                            englishText += 'p'
                        }
                    } else if (inputValue[i + 3] == '-') {
                        if (inputValue[i + 4] == ' ') {
                            englishText += 'j'
                        } else if (inputValue[i + 4] == '-') {
                            if (inputValue[i + 5] == ' ') [
                                englishText += '1'
                            ]
                        }
                    }
                } else if (inputValue[i + 2] == '.') {
                    if (inputValue[i + 3] == ' ') {
                        englishText += 'r'
                    } else if (inputValue[i + 3] == '.') {
                        if(inputValue[i + 4] == ' ') {
                            englishText += 'l'
                        }
                    }
                }
            } 
         
        } else if (inputValue[i] == ' ' && inputValue[i + 1] == ' ' && inputValue[i + 2] == ' ') {
            englishText += ' '
        } else if (inputValue[i] == '-' && inputValue[i - 1] == ' ') {
            if (inputValue[i + 1] == ' ') {
                englishText += "t"
            } else if (inputValue[i + 1] == '-') {
                if (inputValue[i + 2] == ' ') {
                    englishText += 'm'
                } else if (inputValue[i + 2] == '.') {
                    if (inputValue[i + 3] == ' ') {
                        englishText += 'g'
                    } else if (inputValue[i + 3] == ".") {
                        if (inputValue[i + 4] == ' ') {
                            englishText += 'z'
                        } else if (inputValue[i + 4] == '.') {
                            if (inputValue[i + 5] == ' ') {
                                englishText += '7'
                            }
                        }
                    } else if (inputValue[i + 3] == '-') {
                        if (inputValue[i + 4] == ' ') {
                            englishText += 'q'
                        }
                    }
                } else if (inputValue[i + 2] == '-') {
                    if (inputValue[i + 3] == ' ') {
                        englishText += 'o'
                    } else if (inputValue[i + 3] == '.') {
                        if (inputValue[i + 4] == '.') {
                            if (inputValue[i + 5] == ' ') {
                                englishText += '8'
                            }
                        }
                    } else if (inputValue[i + 3] == '-') {
                        if (inputValue[i + 4] == '.') {
                            if (inputValue[i + 5] == ' ') {
                                englishText += '9'
                            } 
                        } else if (inputValue[i + 4] == '-') {
                            if(inputValue[i + 5] == ' ') {
                                englishText += '0'
                            }
                        }
                    }
                }
            } else if (inputValue[i + 1] == '.') {
                if (inputValue[i + 2] == ' ') {
                    englishText += 'n'
                } else if (inputValue[i + 2] == '-') {
                    if (inputValue[i + 3] == ' ') {
                        englishText += 'k'
                    } else if (inputVaue[i + 3] == '.') {
                        if (inputValue[i + 4] == ' ') {
                            englishText += 'c'
                        }
                    } else  if (inputValue[i + 3] == '-') {
                        englishText += 'y'
                    }
                } else if (inputValue[i + 2] == '.') {
                    if (inputValue[i + 3] == ' ') {
                        englishText += 'd'
                    } else if (inputValue[i + 3] == '.') {
                        if (inputValue[i + 4] == ' ') {
                            englishText += 'b'
                        } else if (inputValue[i + 4] == '.') {
                            englishText += '6'
                        }
                    } else if (inputValue[i + 3] == '-') {
                        if (inputValue[i + 4] == ' ') {
                            englishText += 'x'
                        }
                    }
                }
            }
        }
      }  
    }

    

    output.value = englishText;


});


