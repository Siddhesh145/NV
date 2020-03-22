using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NLog;

namespace NVAPI
{
    public static class Nlogger
    {
        public static void nLogger(Exception ex)
        {
            NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
            logger.Error(ex);
        }
        public static void nLoggerMsg(Exception ex)
        {
            NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
            logger.Error(ex.Message);
        }
        public static void DebugLogger(string message)
        {
            NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
            logger.Debug(message);
        }
    }
}