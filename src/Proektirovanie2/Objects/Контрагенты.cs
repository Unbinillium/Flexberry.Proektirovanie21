﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proektirovanie2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Контрагенты.
    /// </summary>
    // *** Start programmer edit section *** (Контрагенты CustomAttributes)

    // *** End programmer edit section *** (Контрагенты CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КонтрагентыE", new string[] {
            "ФИО as \'ФИО\'",
            "Регион as \'Регион\'",
            "Адрес as \'Адрес\'",
            "ИНН as \'ИНН\'"})]
    [View("КонтрагентыL", new string[] {
            "ФИО as \'ФИО\'",
            "Регион as \'Регион\'",
            "Адрес as \'Адрес\'",
            "ИНН as \'ИНН\'"})]
    public class Контрагенты : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private string fРегион;
        
        private string fАдрес;
        
        private string fИНН;
        
        // *** Start programmer edit section *** (Контрагенты CustomMembers)

        // *** End programmer edit section *** (Контрагенты CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (Контрагенты.Адрес CustomAttributes)

        // *** End programmer edit section *** (Контрагенты.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Контрагенты.Адрес Get start)

                // *** End programmer edit section *** (Контрагенты.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (Контрагенты.Адрес Get end)

                // *** End programmer edit section *** (Контрагенты.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагенты.Адрес Set start)

                // *** End programmer edit section *** (Контрагенты.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Контрагенты.Адрес Set end)

                // *** End programmer edit section *** (Контрагенты.Адрес Set end)
            }
        }
        
        /// <summary>
        /// ИНН.
        /// </summary>
        // *** Start programmer edit section *** (Контрагенты.ИНН CustomAttributes)

        // *** End programmer edit section *** (Контрагенты.ИНН CustomAttributes)
        [StrLen(255)]
        public virtual string ИНН
        {
            get
            {
                // *** Start programmer edit section *** (Контрагенты.ИНН Get start)

                // *** End programmer edit section *** (Контрагенты.ИНН Get start)
                string result = this.fИНН;
                // *** Start programmer edit section *** (Контрагенты.ИНН Get end)

                // *** End programmer edit section *** (Контрагенты.ИНН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагенты.ИНН Set start)

                // *** End programmer edit section *** (Контрагенты.ИНН Set start)
                this.fИНН = value;
                // *** Start programmer edit section *** (Контрагенты.ИНН Set end)

                // *** End programmer edit section *** (Контрагенты.ИНН Set end)
            }
        }
        
        /// <summary>
        /// Регион.
        /// </summary>
        // *** Start programmer edit section *** (Контрагенты.Регион CustomAttributes)

        // *** End programmer edit section *** (Контрагенты.Регион CustomAttributes)
        [StrLen(255)]
        public virtual string Регион
        {
            get
            {
                // *** Start programmer edit section *** (Контрагенты.Регион Get start)

                // *** End programmer edit section *** (Контрагенты.Регион Get start)
                string result = this.fРегион;
                // *** Start programmer edit section *** (Контрагенты.Регион Get end)

                // *** End programmer edit section *** (Контрагенты.Регион Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагенты.Регион Set start)

                // *** End programmer edit section *** (Контрагенты.Регион Set start)
                this.fРегион = value;
                // *** Start programmer edit section *** (Контрагенты.Регион Set end)

                // *** End programmer edit section *** (Контрагенты.Регион Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Контрагенты.ФИО CustomAttributes)

        // *** End programmer edit section *** (Контрагенты.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Контрагенты.ФИО Get start)

                // *** End programmer edit section *** (Контрагенты.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Контрагенты.ФИО Get end)

                // *** End programmer edit section *** (Контрагенты.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагенты.ФИО Set start)

                // *** End programmer edit section *** (Контрагенты.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Контрагенты.ФИО Set end)

                // *** End programmer edit section *** (Контрагенты.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КонтрагентыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентыE", typeof(IIS.Proektirovanie2.Контрагенты));
                }
            }
            
            /// <summary>
            /// "КонтрагентыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентыL", typeof(IIS.Proektirovanie2.Контрагенты));
                }
            }
        }
    }
}
