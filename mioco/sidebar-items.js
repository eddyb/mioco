initSidebarItems({"enum":[["ExitStatus","Coroutine exit status (value returned or panic)"],["Message","EventLoop message type"]],"fn":[["mailbox","Create a Mailbox"],["select","Wait till an event is ready"],["select_from","Wait till any event is ready on a set of Handles."],["select_read","Wait till a read event is ready"],["select_read_from","Wait till read event is ready on a set of Handles."],["select_write","Wait till a read event is ready."],["select_write_from","Wait till write event is ready on a set of Handles."],["sleep","Block coroutine for a given time"],["spawn","Spawn a `mioco` coroutine"],["spawn_ext","Spawn a `mioco` coroutine"],["start","Shorthand for creating new `Mioco` instance and starting it right away."],["start_threads","Shorthand for creating new `Mioco` instance with a fixed number of threads and starting it right away."],["sync","Execute a block of synchronous operations"],["thread_num","Get number of threads of the Mioco instance that coroutine is running in."],["timer","Get mutable reference to a timer source io for this coroutine"],["unwrap","Deregister `mio`'s native io type from owning `mioco` coroutine"],["wrap","Register `mio`'s native io type to be used within `mioco` coroutine"],["yield_now","Yield coroutine execution"]],"mod":[["mio",""]],"struct":[["Config","Mioco builder"],["Coroutine","Mioco coroutine (a.k.a. *mioco handler*)"],["CoroutineControl","Coroutine control block"],["CoroutineHandle","Handle to spawned coroutine"],["CoroutineId","Id of a Coroutine used to enumerate them"],["Event","Event delivered to the coroutine"],["EventSource","Event source inside a coroutine"],["EventSourceId","Id of an event source used to enumerate them"],["Handler","Mioco event loop `Handler`"],["MailboxInnerEnd","Inner Mailbox End"],["MailboxOuterEnd","Outside Mailbox End"],["Mioco","Mioco instance"],["Timer","A Timer generating event after a given time"]],"trait":[["Evented","`mioco` can work on any type implementing this trait"],["Scheduler","Coroutine Scheduler"],["SchedulerThread","Per-thread Scheduler"]]});