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
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "ФИО as \'ФИО\'",
            "Должность as \'Должность\'",
            "Подразделение as \'Подразделение\'",
            "Оклад as \'Оклад\'",
            "Телефон as \'Телефон\'"})]
    [View("СотрудникиL", new string[] {
            "ФИО as \'ФИО\'",
            "Должность as \'Должность\'",
            "Подразделение as \'Подразделение\'",
            "Оклад as \'Оклад\'",
            "Телефон as \'Телефон\'"})]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private string fДолжность;
        
        private string fПодразделение;
        
        private double fОклад;
        
        private string fТелефон;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// Должность.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Должность CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Должность CustomAttributes)
        [StrLen(255)]
        public virtual string Должность
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Должность Get start)

                // *** End programmer edit section *** (Сотрудники.Должность Get start)
                string result = this.fДолжность;
                // *** Start programmer edit section *** (Сотрудники.Должность Get end)

                // *** End programmer edit section *** (Сотрудники.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Должность Set start)

                // *** End programmer edit section *** (Сотрудники.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (Сотрудники.Должность Set end)

                // *** End programmer edit section *** (Сотрудники.Должность Set end)
            }
        }
        
        /// <summary>
        /// Оклад.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Оклад CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Оклад CustomAttributes)
        public virtual double Оклад
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Оклад Get start)

                // *** End programmer edit section *** (Сотрудники.Оклад Get start)
                double result = this.fОклад;
                // *** Start programmer edit section *** (Сотрудники.Оклад Get end)

                // *** End programmer edit section *** (Сотрудники.Оклад Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Оклад Set start)

                // *** End programmer edit section *** (Сотрудники.Оклад Set start)
                this.fОклад = value;
                // *** Start programmer edit section *** (Сотрудники.Оклад Set end)

                // *** End programmer edit section *** (Сотрудники.Оклад Set end)
            }
        }
        
        /// <summary>
        /// Подразделение.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Подразделение CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Подразделение CustomAttributes)
        [StrLen(255)]
        public virtual string Подразделение
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Подразделение Get start)

                // *** End programmer edit section *** (Сотрудники.Подразделение Get start)
                string result = this.fПодразделение;
                // *** Start programmer edit section *** (Сотрудники.Подразделение Get end)

                // *** End programmer edit section *** (Сотрудники.Подразделение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Подразделение Set start)

                // *** End programmer edit section *** (Сотрудники.Подразделение Set start)
                this.fПодразделение = value;
                // *** Start programmer edit section *** (Сотрудники.Подразделение Set end)

                // *** End programmer edit section *** (Сотрудники.Подразделение Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Телефон CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Телефон CustomAttributes)
        [StrLen(255)]
        public virtual string Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Телефон Get start)

                // *** End programmer edit section *** (Сотрудники.Телефон Get start)
                string result = this.fТелефон;
                // *** Start programmer edit section *** (Сотрудники.Телефон Get end)

                // *** End programmer edit section *** (Сотрудники.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Телефон Set start)

                // *** End programmer edit section *** (Сотрудники.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Сотрудники.Телефон Set end)

                // *** End programmer edit section *** (Сотрудники.Телефон Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ФИО CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ФИО Get start)

                // *** End programmer edit section *** (Сотрудники.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Сотрудники.ФИО Get end)

                // *** End programmer edit section *** (Сотрудники.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ФИО Set start)

                // *** End programmer edit section *** (Сотрудники.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Сотрудники.ФИО Set end)

                // *** End programmer edit section *** (Сотрудники.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.Proektirovanie2.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.Proektirovanie2.Сотрудники));
                }
            }
        }
    }
}
