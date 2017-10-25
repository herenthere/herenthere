
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
    Verified BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (UserID)
)

CREATE TABLE IF NOT EXISTS RoadTrip(
    RoadTripID SERIAL NOT NULL UNIQUE,
    UserID INTEGER NOT NULL REFERENCES User(UserID),
    RoadTripName VARCHAR(100) NOT NULL,
    Distance INTEGER NOT NULL,
    StartLocation VARCHAR(150) NOT NULL,
    Destination VARCHAR(150) NOT NULL,
    StartDate DATETIME,
    StopDate DATETIME,
    Duration INTEGER,
    PRIMARY KEY (RoadtripID)
)

CREATE TABLE IF NOT EXISTS TripDetail(
    RoadtripID INTEGER NOT NULL REFERENCES RoadTrip(RoadTripID),
    StartPoint INTEGER NOT NULL REFERENCES Stop(StopID),
    EndPoint INTEGER NOT NULL REFERENCES Stop(StopID),
    StopNumber INTEGER NOT NULL,
    Date DATETIME,
    Distance INTEGER NOT NULL,
    Duration INTEGER,
    PRIMARY KEY (RoadtripID, StartPoint, EndPoint)
)

CREATE TABLE IF NOT EXISTS RoadTripStatistics(
    RoadtripStatsID SERIAL NOT NULL UNIQUE,
    RoadtripID INTEGER NOT NULL REFERENCES RoadTrip(RoadTripID),
    DateCreated DATETIME NOT NULL,
    ActualLength INTEGER,
    Stops INTEGER,
    NumberOfClicks INTEGER,
    PRIMARY KEY (RoadtripStatsID)
)

CREATE TABLE IF NOT EXISTS Feedback(
    FeedbackID SERIAL NOT NULL UNIQUE,
    UserID INTEGER NOT NULL REFERENCES User(UserID),
    RoadtripID INTEGER NOT NULL REFERENCES RoadTrip(RoadTripID),
    Rating INTEGER,
    Comment VARCHAR(200),
    PRIMARY KEY (FeedbackID)
)

CREATE TABLE IF NOT EXISTS RoadTripOptions(
    RoadTripOptionsID SERIAL NOT NULL UNIQUE,
    RoadTripID INTEGER NOT NULL REFERENCES RoadTrip(RoadTripID),
    IsPublic BOOLEAN NOT NULL DEFAULT 0,
    RoadTripRange INTEGER NOT NULL,
    FinancialCost INTEGER,
    NumOfDaysOnRoad INTEGER,
    TimesLunch DATETIME,
    TimesDinner DATETIME,
    DriveWithoutStop INTEGER,
    PRIMARY KEY (RoadTripOptionsID)
)

CREATE TABLE IF NOT EXISTS Categories(
    CategoryID SERIAL NOT NULL UNIQUE,
    CategoryName VARCHAR(100),
    PRIMARY KEY (CategoryID)
)

CREATE TABLE IF NOT EXISTS Business(
    BusinessID SERIAL NOT NULL UNIQUE,
    CategoryID INTEGER REFERENCES Category(CategoryID),
    NumberHits INTEGER,
    ContactEmail VARCHAR(100) NOT NULL,
    PRIMARY KEY (BusinessID)
)

CREATE TABLE IF NOT EXISTS Stop(
    StopID SERIAL NOT NULL UNIQUE,
    CategoryID INTEGER NOT NULL REFERENCES Category(CategoryID),
    BusinessID INTEGER REFERENCES Business(BusinessID),
    StopName VARCHAR(100) NOT NULL,
    Address VARCHAR(250),
    Rating INTEGER,
    PRIMARY KEY (StopID)
)

CREATE TABLE IF NOT EXISTS TrackPromotion(
    StopID INTEGER NOT NULL REFERENCES Stop(StopID),
    PromotionDetailID INTEGER NOT NULL REFERENCES PromotionDetail(PromotionDetailID),
    Priority INTEGER NOT NULL,
    PRIMARY KEY (StopID, PromotionDetailID)
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

CREATE TABLE IF NOT EXISTS Payment(
    PaymentID SERIAL NOT NULL UNIQUE,
    PaymentType VARCHAR(100) NOT NULL,
    Price INTEGER NOT NULL,
    IsPaid BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (PaymentID)
)

CREATE TABLE IF NOT EXISTS PromotionDetail(
    PromotionDetailID SERIAL NOT NULL UNIQUE,
    BusinessID INTEGER NOT NULL REFERENCES Business(BusinessID),
    ContactID INTEGER NOT NULL REFERENCES Contact(ContactID),
    PaymentID INTEGER NOT NULL REFERENCES Payment(PaymentID),
    PromotionStartDate DATETIME,
    PromotionEndDate DATETIME,
    PRIMARY KEY (PromotionDetailID) 
)