
CREATE TABLE IF NOT EXISTS Admin(
    AdminID SERIAL NOT NULL UNIQUE,
    Email VARCHAR(100) NOT NULL,
    Password VARCHAR(100) NOT NULL,
    PRIMARY KEY (AdminID)
)

CREATE TABLE IF NOT EXISTS User(
    UserID SERIAL NOT NULL UNIQUE,
    UserName VARCHAR(30) NOT NULL,
    LastName VARCHAR(30) NOT NULL,
    FirstName VARCHAR(30) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Password VARCHAR(100) NOT NULL,
    PRIMARY KEY (UserID)
)

CREATE TABLE IF NOT EXISTS Feedback(
    FeedbackID SERIAL NOT NULL UNIQUE,
    UserID INTEGER NOT NULL,
    RoadtripID INTEGER NOT NULL,
    Rating INTEGER,
    Comment VARCHAR(200),
    PRIMARY KEY (FeedbackID),
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (RoadtripID) REFERENCES RoadTrip(RoadtripID)
)

CREATE TABLE IF NOT EXISTS Roadtrip(
    RoadtripID SERIAL NOT NULL UNIQUE,
    UserID INTEGER NOT NULL,
    RoadtripName VARCHAR(100) NOT NULL,
    Distance INTEGER NOT NULL,
    StartLocation VARCHAR(150) NOT NULL,
    Destination VARCHAR(150) NOT NULL,
    StartDate DATETIME,
    StopDate DATETIME,
    Duration INTEGER,
    PRIMARY KEY (RoadtripID),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
)

CREATE TABLE IF NOT EXISTS RoadTripStatistics(
    RoadtripStatsID SERIAL NOT NULL UNIQUE,
    RoadtripID INTEGER NOT NULL,
    DateCreated DATETIME NOT NULL,
    ActualLength INTEGER,
    Stops INTEGER,
    NumberOfClicks INTEGER,
    PRIMARY KEY (RoadtripStatsID),
    FOREIGN KEY (RoadtripID) REFERENCES Roadtrip(RoadtripID)
)

CREATE TABLE IF NOT EXISTS TripDetail(
    RoadtripID INTEGER NOT NULL,
    StopID INTEGER NOT NULL,
    StopNumber INTEGER NOT NULL,
    Date DATETIME,
    PRIMARY KEY (RoadtripID, StopID),
    FOREIGN KEY (RoadtripID) REFERENCES Roadtrip(RoadtripID),
    FOREIGN KEY (StopID) REFERENCES Stop(StopID)
)

CREATE TABLE IF NOT EXISTS RoadTripOptions(
    RoadtripOptionsID SERIAL NOT NULL UNIQUE,
    RoadtripID INTEGER NOT NULL,
    Public BOOLEAN NOT NULL,
    Range INTEGER NOT NULL,
    FinancialCost INTEGER,
    NumOfDaysOnRoad INTEGER,
    TimesLunch DATETIME,
    TimesDinner DATETIME,
    DriveWithoutStop INTEGER,
    PRIMARY KEY (RoadtripOptionsID),
    FOREIGN KEY (RoadtripID) REFERENCES Roadtrip(RoadtripID),
)

CREATE TABLE IF NOT EXISTS Stop(
    StopID SERIAL NOT NULL UNIQUE,
    CategoryID INTEGER NOT NULL,
    BusinessID INTEGER,
    StopName VARCHAR(100) NOT NULL,
    Address VARCHAR(250),
    Rating INTEGER,
    PRIMARY KEY (StopID),
    FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID),
    FOREIGN KEY (BusinessID) REFERENCES Business(BusinessID)
)

CREATE TABLE IF NOT EXISTS TrackPromotion(
    StopID INTEGER NOT NULL,
    PromotionDetailID INTEGER NOT NULL,
    Priority INTEGER NOT NULL,
    PRIMARY KEY (StopID, PromotionDetailID),
    FOREIGN KEY (StopID) REFERENCES Stop(StopID),
    FOREIGN KEY (PromotionDetailID) REFERENCES PromotionDetail(PromotionDetailID)
)

CREATE TABLE IF NOT EXISTS Categories(
    CategoryID SERIAL NOT NULL UNIQUE,
    CategoryName VARCHAR(100),
    PRIMARY KEY (CategoryID)
)

CREATE TABLE IF NOT EXISTS Business(
    BusinessID SERIAL NOT NULL UNIQUE,
    CategoryID INTEGER,
    NumberHits INTEGER,
    ContactEmail VARCHAR(100) NOT NULL,
    PRIMARY KEY (BusinessID),
    FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID)
)

CREATE TABLE IF NOT EXSITS PromotionDetail(
    PromotionDetailID SERIAL NOT NULL UNIQUE,
    BusinessID INTEGER NOT NULL,
    ContactID INTEGER NOT NULL,
    PaymentID INTEGER NOT NULL,
    PromotionStartDate DATETIME,
    PromotionEndDate DATETIME,
    PRIMARY KEY (PromotionDetailID),
    FOREIGN KEY (BusinessID) REFERENCES Business(BusinessID),
    FOREIGN KEY (ContactID) REFERENCES Contact(ContactID),
    FOREIGN KEY (PaymentID) REFERENCES Payment(PaymentID)
)

CREATE TABLE IF NOT EXISTS Payment(
    PaymentID SERIAL NOT NULL UNIQUE,
    PaymentType VARCHAR(100) NOT NULL,
    Price INTEGER NOT NULL,
    PaymentStatus BOOLEAN NOT NULL,
    PRIMARY KEY (PaymentID)
)

CREATE TABLE IF NOT EXISTS Contact(
    ContactID SERIAL NOT NULL UNIQUE,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50),
    ContactName VARCHAR(50),
    ContactEmail VARCHAR(100) NOT NULL,
    ContactNumber INTEGER,
    AdditionalInfo VARCHAR(200),
    PRIMARY KEY (ContactID)
)