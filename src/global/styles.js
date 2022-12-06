export const colors = {
  primary: '#ff8c52',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  green: '#1CC625',
  cardComment: '#86939e',
  cardBackground: '#fff',
  white: '#fff',
  facebookBlue: '#3b5998',
  googleRed: '#de5246',
  red: '#df1217'
};

export const params = {
  headerHeight: 40,
  styledButton: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 12,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  styledTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.3
  },
  styledButtonOutline: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 50,
    borderRadius: 12,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    height: 50,
    backgroundColor: colors.facebookBlue,
    marginHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'center'
  },
  buttonWithIconText: {
    color: colors.white,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold'
  },
  activeType: {
    paddingVertical: 6,
    paddingHorizontal: 25,
    borderRadius: 14,
    fontSize: 16,
    marginHorizontal: 15
  },
  inactiveType: {
    borderColor: colors.primary,
    backgroundColor: colors.grey5
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: colors.grey5,
    paddingVertical: 3,
    paddingLeft: 10,
    marginTop: 20
  }
};

export const screens = {
  title: {
    color: colors.primary,
    fontSize: 18,
    marginLeft: 20,
    marginTop: 10,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
};

export const appInput = {
  textInput: {
    borderWidth: 1,
    borderColor: colors.grey4,
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  textInput2: {
    borderWidth: 5,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
};
