﻿




CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Должность VARCHAR(255) NULL,
 Подразделение VARCHAR(255) NULL,
 Оклад DOUBLE PRECISION NULL,
 Телефон VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Контрагенты (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Регион VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 ИНН VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ГотПродукция (
 primaryKey UUID NOT NULL,
 Товар VARCHAR(255) NULL,
 КолВо VARCHAR(255) NULL,
 Одобрено BOOLEAN NULL,
 Номенклатура UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Номенклатура (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 ЕдИзм VARCHAR(255) NULL,
 ЭкоКласс VARCHAR(255) NULL,
 ЗащСвойст VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗапасМатериалов (
 primaryKey UUID NOT NULL,
 КолВо DOUBLE PRECISION NULL,
 Товар VARCHAR(255) NULL,
 Номенклатура UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Перемещение (
 primaryKey UUID NOT NULL,
 Ответственный VARCHAR(255) NULL,
 Контрагент VARCHAR(255) NULL,
 Материалы VARCHAR(255) NULL,
 Цена DOUBLE PRECISION NULL,
 КолВо DOUBLE PRECISION NULL,
 Сумма DOUBLE PRECISION NULL,
 Контрагенты UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 Номенклатура UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ГотПродукция ADD CONSTRAINT FKb6314f320e57d5c972e2ae15950cef22d5a086f7 FOREIGN KEY (Номенклатура) REFERENCES Номенклатура; 
CREATE INDEX Indexb6314f320e57d5c972e2ae15950cef22d5a086f7 on ГотПродукция (Номенклатура); 

 ALTER TABLE ЗапасМатериалов ADD CONSTRAINT FK91384d91bd88ecd63bbaffb896700c14f2dabd8e FOREIGN KEY (Номенклатура) REFERENCES Номенклатура; 
CREATE INDEX Index91384d91bd88ecd63bbaffb896700c14f2dabd8e on ЗапасМатериалов (Номенклатура); 

 ALTER TABLE Перемещение ADD CONSTRAINT FK8a37a108223d1091aefb1d5a834371d33c0b50dc FOREIGN KEY (Контрагенты) REFERENCES Контрагенты; 
CREATE INDEX Index8a37a108223d1091aefb1d5a834371d33c0b50dc on Перемещение (Контрагенты); 

 ALTER TABLE Перемещение ADD CONSTRAINT FK61d7de71ad0424baeff9bb46e62ebc4ca974bd12 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index61d7de71ad0424baeff9bb46e62ebc4ca974bd12 on Перемещение (Сотрудники); 

 ALTER TABLE Перемещение ADD CONSTRAINT FK94fe22c711ea6d2c4be853b06e00406552a24af2 FOREIGN KEY (Номенклатура) REFERENCES Номенклатура; 
CREATE INDEX Index94fe22c711ea6d2c4be853b06e00406552a24af2 on Перемещение (Номенклатура); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 
