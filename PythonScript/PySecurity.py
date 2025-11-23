def userSecurityCheck():
    username = input("Enter Username: ")
    valid_user = False

    if len(username) <= 10 and username.isalnum():
        valid_user = not valid_user
        print("Valid Username.")

    elif "<" or ">" in str(username):
        print("Username must NOT contain < or > characters.")
    
    elif len(username) > 10 and not username.isalnum():
        print("Username must be alphanumeric AND no more than 10 characters.")

userSecurityCheck()